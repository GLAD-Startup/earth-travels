"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { gsap } from "gsap";
import { GlassCard } from "@/components/ui";
import Link from "next/link";

type Marker = {
  name: string;
  lat: number;
  lon: number;
  packagesCount: number;
  startingPrice: number;
  description: string;
};

const MARKERS: Marker[] = [
  { name: "Kashmir", lat: 34.08, lon: 74.8, packagesCount: 3, startingPrice: 32000, description: "Where Heaven Touches Earth" },
  { name: "Maldives", lat: 3.2, lon: 73.02, packagesCount: 2, startingPrice: 65000, description: "Stillness Above the Ocean" },
  { name: "Malaysia", lat: 3.13, lon: 101.68, packagesCount: 1, startingPrice: 55000, description: "Asia's Melting Pot" },
  { name: "Dubai", lat: 25.2, lon: 55.27, packagesCount: 2, startingPrice: 45000, description: "Where Desert Meets the Sky" },
  { name: "Thailand", lat: 13.75, lon: 100.5, packagesCount: 2, startingPrice: 28000, description: "Chaos and Calm in Balance" },
  { name: "Bali", lat: -8.4, lon: 115.18, packagesCount: 2, startingPrice: 45000, description: "Island of a Thousand Temples" },
  { name: "Paris", lat: 48.85, lon: 2.35, packagesCount: 3, startingPrice: 120000, description: "Romantic European Heart" },
  { name: "Kerala", lat: 10.85, lon: 76.27, packagesCount: 2, startingPrice: 18000, description: "Where Backwaters Hold Time" },
  { name: "Rajasthan", lat: 27.02, lon: 74.21, packagesCount: 2, startingPrice: 22000, description: "Royal India, Unfiltered" },
  { name: "Sri Lanka", lat: 7.87, lon: 80.77, packagesCount: 1, startingPrice: 35000, description: "Pearl of the Indian Ocean" },
  { name: "Singapore", lat: 1.35, lon: 103.86, packagesCount: 1, startingPrice: 55000, description: "The Future, Already Here" },
];

interface GlobeViewerProps {
  onSelectDestination: (name: string) => void;
}

interface GeoJSONFeature {
  geometry: {
    type: string;
    coordinates: number[][][] | number[][][][];
  };
}

export default function GlobeViewer({ onSelectDestination }: GlobeViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<{
    show: boolean;
    x: number;
    y: number;
    marker: Marker | null;
  }>({ show: false, x: 0, y: 0, marker: null });

  const [previewPanel, setPreviewPanel] = useState<Marker | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight || 500;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080c14, 0.0015);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 220;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 120;
    controls.maxDistance = 350;
    controls.enablePan = false;

    const ambientLight = new THREE.AmbientLight(0x0a1628, 1.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xd4a017, 2.5);
    dirLight1.position.set(5, 3, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x0a1628, 2);
    dirLight2.position.set(-5, -3, -5);
    scene.add(dirLight2);

    const radius = 50;

    const latLonToVector3 = (lat: number, lon: number, r: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);

      const x = -(r * Math.sin(phi) * Math.sin(theta));
      const y = r * Math.cos(phi);
      const z = r * Math.sin(phi) * Math.cos(theta);

      return new THREE.Vector3(x, y, z);
    };

    const globeGeometry = new THREE.SphereGeometry(radius, 64, 64);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0x080C14,
      transparent: true,
      opacity: 0.95,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    const pointsGeometry = new THREE.SphereGeometry(radius + 0.1, 48, 48);
    const wireframeGlobe = new THREE.Mesh(
      pointsGeometry,
      new THREE.MeshBasicMaterial({
        color: 0x1d2e47,
        wireframe: true,
        transparent: true,
        opacity: 0.08,
      })
    );
    scene.add(wireframeGlobe);

    // Fetch and render world land outlines from GeoJSON
    fetch("/data/ne_110m_land.json")
      .then((res) => res.json())
      .then((data) => {
        const lineMaterial = new THREE.LineBasicMaterial({
          color: 0xd4a017, // Premium gold brand color
          transparent: true,
          opacity: 0.45,
        });

        data.features.forEach((feature: GeoJSONFeature) => {
          const { type, coordinates } = feature.geometry;
          if (type === "Polygon") {
            drawRing(coordinates[0] as number[][], lineMaterial, radius + 0.2);
          } else if (type === "MultiPolygon") {
            (coordinates as number[][][][]).forEach((polygon) => {
              drawRing(polygon[0], lineMaterial, radius + 0.2);
            });
          }
        });
      })
      .catch((err) => {
        console.error("Failed to load globe outline data:", err);
      });

    // Fetch and render country borders (subtle lines)
    fetch("/data/ne_110m_countries.json")
      .then((res) => res.json())
      .then((data) => {
        const lineMaterial = new THREE.LineBasicMaterial({
          color: 0xd4a017,
          transparent: true,
          opacity: 0.18, // More subtle for inner country borders
        });

        data.features.forEach((feature: GeoJSONFeature) => {
          const { type, coordinates } = feature.geometry;
          if (type === "Polygon") {
            drawRing(coordinates[0] as number[][], lineMaterial, radius + 0.18);
          } else if (type === "MultiPolygon") {
            (coordinates as number[][][][]).forEach((polygon) => {
              drawRing(polygon[0], lineMaterial, radius + 0.18);
            });
          }
        });
      })
      .catch(() => {
        console.log("No country border file loaded yet. Run download command to load country borders.");
      });

    const drawRing = (ring: number[][], material: THREE.LineBasicMaterial, r: number) => {
      const points: THREE.Vector3[] = [];
      ring.forEach(([lon, lat]) => {
        points.push(latLonToVector3(lat, lon, r));
      });
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      globe.add(line);
    };

    const markerGroup = new THREE.Group();
    scene.add(markerGroup);

    const markerGeometry = new THREE.SphereGeometry(1.4, 16, 16);
    const markerMaterial = new THREE.MeshBasicMaterial({
      color: 0xd4a017,
    });

    const markerObjects: { mesh: THREE.Mesh; data: Marker }[] = [];

    // Mathura Hub Coordinates
    const mathuraLat = 27.4924;
    const mathuraLon = 77.6737;
    const mathuraPos = latLonToVector3(mathuraLat, mathuraLon, radius + 0.6);

    // Render Mathura Hub
    const hubGeometry = new THREE.SphereGeometry(1.5, 16, 16);
    const hubMaterial = new THREE.MeshBasicMaterial({
      color: 0xef4444, // Red headquarters indicator
    });
    const hubMesh = new THREE.Mesh(hubGeometry, hubMaterial);
    hubMesh.position.copy(mathuraPos);
    
    const hubRingGeo = new THREE.RingGeometry(2.0, 2.8, 32);
    const hubRingMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });
    const hubRingMesh = new THREE.Mesh(hubRingGeo, hubRingMat);
    hubRingMesh.position.copy(mathuraPos);
    hubRingMesh.lookAt(new THREE.Vector3(0, 0, 0));
    hubRingMesh.rotateY(Math.PI);
    
    markerGroup.add(hubMesh);
    markerGroup.add(hubRingMesh);

    // Draw route arcs from Mathura to destinations
    const drawRouteArc = (p1: THREE.Vector3, p2: THREE.Vector3) => {
      const dist = p1.distanceTo(p2);
      const arcHeight = radius + dist * 0.22;
      
      const midPoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      const controlPoint = midPoint.clone().normalize().multiplyScalar(arcHeight);
      
      const curve = new THREE.QuadraticBezierCurve3(p1, controlPoint, p2);
      const points = curve.getPoints(30);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      
      const material = new THREE.LineBasicMaterial({
        color: 0xd4a017,
        transparent: true,
        opacity: 0.35,
      });
      
      const line = new THREE.Line(geometry, material);
      markerGroup.add(line);
    };

    MARKERS.forEach((m) => {
      const position = latLonToVector3(m.lat, m.lon, radius + 0.6);
      const markerMesh = new THREE.Mesh(markerGeometry, markerMaterial.clone());
      markerMesh.position.copy(position);

      const ringGeo = new THREE.RingGeometry(1.8, 2.5, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xf0c040,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(position);
      ringMesh.lookAt(new THREE.Vector3(0, 0, 0));
      ringMesh.rotateY(Math.PI);
      
      markerGroup.add(ringMesh);
      markerGroup.add(markerMesh);
      markerObjects.push({ mesh: markerMesh, data: m });

      // Draw arc routes
      drawRouteArc(mathuraPos, position);
    });

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        markerObjects.map((o) => o.mesh)
      );

      if (intersects.length > 0) {
        const hoveredMesh = intersects[0].object as THREE.Mesh;
        const matched = markerObjects.find((o) => o.mesh === hoveredMesh);

        if (matched) {
          markerObjects.forEach((o) => {
            if (o.mesh === hoveredMesh) {
              o.mesh.scale.set(1.6, 1.6, 1.6);
              (o.mesh.material as THREE.MeshBasicMaterial).color.setHex(0xf0c040);
            } else {
              o.mesh.scale.set(1, 1, 1);
              (o.mesh.material as THREE.MeshBasicMaterial).color.setHex(0xd4a017);
            }
          });

          setTooltip({
            show: true,
            x: event.clientX - rect.left,
            y: event.clientY - rect.top - 24,
            marker: matched.data,
          });
          document.body.style.cursor = "pointer";
          return;
        }
      }

      markerObjects.forEach((o) => {
        o.mesh.scale.set(1, 1, 1);
        (o.mesh.material as THREE.MeshBasicMaterial).color.setHex(0xd4a017);
      });
      setTooltip((prev) => ({ ...prev, show: false }));
      document.body.style.cursor = "default";
    };

    const handleClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        markerObjects.map((o) => o.mesh)
      );

      if (intersects.length > 0) {
        const clickedMesh = intersects[0].object as THREE.Mesh;
        const matched = markerObjects.find((o) => o.mesh === clickedMesh);

        if (matched) {
          const targetPos = matched.mesh.position.clone().normalize().multiplyScalar(150);

          gsap.to(camera.position, {
            x: targetPos.x,
            y: targetPos.y,
            z: targetPos.z,
            duration: 1.5,
            ease: "power2.inOut",
            onUpdate: () => {
              camera.lookAt(0, 0, 0);
            },
          });

          setPreviewPanel(matched.data);
          onSelectDestination(matched.data.name);
        }
      }
    };

    renderer.domElement.addEventListener("mousemove", handleMouseMove);
    renderer.domElement.addEventListener("click", handleClick);

    let animationFrameId: number;
    let idleRotation = true;

    controls.addEventListener("start", () => {
      idleRotation = false;
    });

    const animate = () => {
      controls.update();

      if (idleRotation) {
        globe.rotation.y += 0.0012;
        wireframeGlobe.rotation.y += 0.0012;
        markerGroup.rotation.y += 0.0012;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current || !renderer || !camera) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (renderer && renderer.domElement && mountRef.current) {
        renderer.domElement.removeEventListener("mousemove", handleMouseMove);
        renderer.domElement.removeEventListener("click", handleClick);
        try {
          mountRef.current.removeChild(renderer.domElement);
        } catch {
          // Ignored
        }
      }
      scene.clear();
      renderer.dispose();
    };
  }, [onSelectDestination]);

  return (
    <div className="relative w-full h-[65vh] min-h-[450px] lg:h-[75vh] flex items-center justify-center bg-midnight/30 rounded-3xl border border-white/5 overflow-hidden">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      <div className="absolute bottom-6 left-6 pointer-events-none z-10">
        <p className="text-[10px] md:text-xs font-mono tracking-widest text-white/40 uppercase">
          🖱 Drag to rotate • Scroll to zoom • Click dot to explore
        </p>
      </div>

      {tooltip.show && tooltip.marker && (
        <div
          className="absolute z-30 pointer-events-none transition-all duration-75"
          style={{
            left: `${tooltip.x + 12}px`,
            top: `${tooltip.y - 12}px`,
          }}
        >
          <GlassCard hover={false} className="p-3 bg-midnight/90 border border-[#D4A017]/40 shadow-xl whitespace-nowrap">
            <h4 className="font-sans text-xs font-bold text-white mb-0.5">
              {tooltip.marker.name}
            </h4>
            <span className="font-mono text-[9px] text-[#F0C040] uppercase tracking-wider block font-semibold">
              Starting at ₹{tooltip.marker.startingPrice.toLocaleString("en-IN")}
            </span>
          </GlassCard>
        </div>
      )}

      {previewPanel && (
        <div className="absolute right-6 bottom-6 left-6 md:left-auto md:w-80 z-20 animate-fade-in-up">
          <GlassCard hover={false} className="p-6 bg-midnight/90 border border-white/10 shadow-2xl relative">
            <button
              onClick={() => setPreviewPanel(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors text-xs font-mono"
            >
              ✕
            </button>
            <span className="text-[10px] font-mono text-[#D4A017] uppercase tracking-wider block mb-1">
              📍 Destination Spotlight
            </span>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              {previewPanel.name}
            </h3>
            <p className="font-sans text-xs text-white/70 leading-relaxed mb-4">
              {previewPanel.description}. Discover unique holiday packages custom designed for families from Mathura.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <div>
                <span className="text-[9px] text-white/40 block font-sans uppercase">Starting Price</span>
                <span className="font-mono text-base font-bold text-[#D4A017]">
                  ₹{previewPanel.startingPrice.toLocaleString("en-IN")}
                </span>
              </div>
              <Link
                href={`/packages?destination=${previewPanel.name.toLowerCase()}`}
                className="btn-gold font-sans text-center text-xs font-semibold py-2 px-4 inline-block"
              >
                View Packages
              </Link>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
}
