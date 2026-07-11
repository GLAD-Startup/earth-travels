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
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080c14, 0.001);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    // Position camera straight on z-axis looking down at flat plane
    camera.position.set(0, 0, 110);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 40;
    controls.maxDistance = 180;
    controls.enableRotate = false; // Disable 3D rotation for a 2D map view
    
    // Enable panning with left click, dolly with scroll/middle
    controls.mouseButtons = {
      LEFT: THREE.MOUSE.PAN,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.ROTATE
    };

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xd4a017, 1.2);
    dirLight1.position.set(0, 0, 10);
    scene.add(dirLight1);

    // Flat Map Projections
    const latLonToVector3 = (lat: number, lon: number, zVal: number = 0.2) => {
      // Maps lon (-180 to 180) to x (-85 to 85)
      const x = (lon / 180) * 85;
      // Maps lat (-90 to 90) to y (-42.5 to 42.5)
      const y = (lat / 90) * 42.5;
      return new THREE.Vector3(x, y, zVal);
    };

    // Flat World Map Background Plane
    const mapPlaneGeo = new THREE.PlaneGeometry(170, 85);
    const mapPlaneMat = new THREE.MeshBasicMaterial({
      color: 0x080C14,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide
    });
    const globe = new THREE.Mesh(mapPlaneGeo, mapPlaneMat);
    scene.add(globe);

    // Decorative grid overlay on plane
    const pointsGeometry = new THREE.PlaneGeometry(170, 85, 24, 12);
    const wireframeGlobe = new THREE.Mesh(
      pointsGeometry,
      new THREE.MeshBasicMaterial({
        color: 0x1d2e47,
        wireframe: true,
        transparent: true,
        opacity: 0.04,
      })
    );
    wireframeGlobe.position.z = 0.05;
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
            drawRing(coordinates[0] as number[][], lineMaterial, 0.1);
          } else if (type === "MultiPolygon") {
            (coordinates as number[][][][]).forEach((polygon) => {
              drawRing(polygon[0], lineMaterial, 0.1);
            });
          }
        });
      })
      .catch((err) => {
        console.error("Failed to load map outline data:", err);
      });

    // Fetch and render country borders (subtle lines)
    fetch("/data/ne_110m_countries.json")
      .then((res) => res.json())
      .then((data) => {
        const lineMaterial = new THREE.LineBasicMaterial({
          color: 0xd4a017,
          transparent: true,
          opacity: 0.15, // More subtle for inner country borders
        });

        data.features.forEach((feature: GeoJSONFeature) => {
          const { type, coordinates } = feature.geometry;
          if (type === "Polygon") {
            drawRing(coordinates[0] as number[][], lineMaterial, 0.08);
          } else if (type === "MultiPolygon") {
            (coordinates as number[][][][]).forEach((polygon) => {
              drawRing(polygon[0], lineMaterial, 0.08);
            });
          }
        });
      })
      .catch(() => {
        console.log("No country border file loaded yet.");
      });

    const drawRing = (ring: number[][], material: THREE.LineBasicMaterial, zVal: number) => {
      const points: THREE.Vector3[] = [];
      ring.forEach(([lon, lat]) => {
        points.push(latLonToVector3(lat, lon, zVal));
      });
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      globe.add(line);
    };

    const markerGroup = new THREE.Group();
    scene.add(markerGroup);

    const markerGeometry = new THREE.SphereGeometry(1.2, 16, 16);
    const markerMaterial = new THREE.MeshBasicMaterial({
      color: 0xd4a017,
    });

    const markerObjects: { mesh: THREE.Mesh; data: Marker }[] = [];

    // Mathura Hub Coordinates
    const mathuraLat = 27.4924;
    const mathuraLon = 77.6737;
    const mathuraPos = latLonToVector3(mathuraLat, mathuraLon, 0.5);

    // Render Mathura Hub (lying flat)
    const hubGeometry = new THREE.RingGeometry(0.1, 1.2, 32);
    const hubMaterial = new THREE.MeshBasicMaterial({
      color: 0xef4444, // Red headquarters indicator
      side: THREE.DoubleSide
    });
    const hubMesh = new THREE.Mesh(hubGeometry, hubMaterial);
    hubMesh.position.copy(mathuraPos);
    
    const hubRingGeo = new THREE.RingGeometry(1.6, 2.2, 32);
    const hubRingMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });
    const hubRingMesh = new THREE.Mesh(hubRingGeo, hubRingMat);
    hubRingMesh.position.copy(mathuraPos);
    
    markerGroup.add(hubMesh);
    markerGroup.add(hubRingMesh);

    // Draw route arcs from Mathura to destinations (rising out of the map)
    const drawRouteArc = (p1: THREE.Vector3, p2: THREE.Vector3) => {
      const dist = p1.distanceTo(p2);
      // Curve pulls out on Z axis relative to 2D distance
      const midPoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      const controlPoint = new THREE.Vector3(midPoint.x, midPoint.y, dist * 0.28 + 3.0);
      
      const curve = new THREE.QuadraticBezierCurve3(p1, controlPoint, p2);
      const points = curve.getPoints(30);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      
      const material = new THREE.LineBasicMaterial({
        color: 0xd4a017,
        transparent: true,
        opacity: 0.38,
      });
      
      const line = new THREE.Line(geometry, material);
      markerGroup.add(line);
    };

    MARKERS.forEach((m) => {
      const position = latLonToVector3(m.lat, m.lon, 0.5);
      const markerMesh = new THREE.Mesh(markerGeometry, markerMaterial.clone());
      markerMesh.position.copy(position);

      const ringGeo = new THREE.RingGeometry(1.5, 2.1, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xf0c040,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(position);
      
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
          // Pan camera and target to clicked destination smoothly in 2D
          gsap.to(controls.target, {
            x: matched.mesh.position.x,
            y: matched.mesh.position.y,
            z: 0,
            duration: 1.2,
            ease: "power2.inOut",
          });
          gsap.to(camera.position, {
            x: matched.mesh.position.x,
            y: matched.mesh.position.y,
            z: 60, // Zoomed in height
            duration: 1.2,
            ease: "power2.inOut",
          });

          setPreviewPanel(matched.data);
          onSelectDestination(matched.data.name);
        }
      }
    };

    renderer.domElement.addEventListener("mousemove", handleMouseMove);
    renderer.domElement.addEventListener("click", handleClick);

    let animationFrameId: number;

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (renderer && renderer.domElement && container) {
        renderer.domElement.removeEventListener("mousemove", handleMouseMove);
        renderer.domElement.removeEventListener("click", handleClick);
        try {
          container.removeChild(renderer.domElement);
        } catch {
          // Ignored
        }
      }
      scene.clear();
      renderer.dispose();
    };
  }, [onSelectDestination]);

  return (
    <div className="relative w-full h-[65vh] min-h-[450px] lg:h-[75vh] flex items-center justify-center bg-background/30 rounded-3xl border border-charcoal/5 overflow-hidden">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      <div className="absolute bottom-6 left-6 pointer-events-none z-10">
        <p className="text-[10px] md:text-xs font-mono tracking-widest text-charcoal/40 uppercase">
          🖱 Drag to pan • Scroll to zoom • Click dot to explore
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
          <GlassCard hover={false} className="p-3 bg-background/90 border border-[#D4A017]/40 shadow-xl whitespace-nowrap">
            <h4 className="font-sans text-xs font-bold text-charcoal mb-0.5">
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
          <GlassCard hover={false} className="p-6 bg-background/90 border border-charcoal/10 shadow-2xl relative">
            <button
              onClick={() => setPreviewPanel(null)}
              className="absolute top-4 right-4 text-charcoal/50 hover:text-charcoal transition-colors text-xs font-mono"
            >
              ✕
            </button>
            <span className="text-[10px] font-mono text-[#D4A017] uppercase tracking-wider block mb-1">
              📍 Destination Spotlight
            </span>
            <h3 className="font-display text-2xl font-bold text-charcoal mb-2">
              {previewPanel.name}
            </h3>
            <p className="font-sans text-xs text-charcoal/70 leading-relaxed mb-4">
              {previewPanel.description}. Discover unique holiday packages custom designed for families from Mathura.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-charcoal/5">
              <div>
                <span className="text-[9px] text-charcoal/40 block font-sans uppercase">Starting Price</span>
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
