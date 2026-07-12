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
  region: string;
};

const MARKERS: Marker[] = [
  { name: "Kashmir", lat: 34.08, lon: 74.8, packagesCount: 3, startingPrice: 24500, description: "Where Heaven Touches Earth", region: "india" },
  { name: "Maldives", lat: 3.2, lon: 73.02, packagesCount: 2, startingPrice: 78000, description: "Stillness Above the Ocean", region: "islands" },
  { name: "Dubai", lat: 25.2, lon: 55.27, packagesCount: 1, startingPrice: 52000, description: "Where Desert Meets the Sky", region: "middle-east" },
  { name: "Bali", lat: -8.4, lon: 115.18, packagesCount: 2, startingPrice: 46000, description: "Island of a Thousand Temples", region: "southeast-asia" },
  { name: "Europe", lat: 48.85, lon: 2.35, packagesCount: 3, startingPrice: 145000, description: "Old Stones, New Memories", region: "europe" },
  { name: "Thailand", lat: 13.75, lon: 100.5, packagesCount: 2, startingPrice: 38000, description: "Chaos and Calm in Balance", region: "southeast-asia" },
  { name: "Kerala", lat: 10.85, lon: 76.27, packagesCount: 2, startingPrice: 19500, description: "Where Backwaters Hold Time", region: "india" },
  { name: "Rajasthan", lat: 27.02, lon: 74.21, packagesCount: 2, startingPrice: 22000, description: "Royal India, Unfiltered", region: "india" },
  { name: "Singapore", lat: 1.35, lon: 103.86, packagesCount: 2, startingPrice: 55000, description: "The Future, Already Here", region: "southeast-asia" },
  { name: "Sri Lanka", lat: 7.87, lon: 80.77, packagesCount: 1, startingPrice: 35000, description: "Pearl of the Indian Ocean", region: "islands" },
  { name: "Vietnam", lat: 16.0, lon: 108.0, packagesCount: 2, startingPrice: 26000, description: "Heritage and Emerald Waters", region: "southeast-asia" },
  { name: "Malaysia", lat: 3.13, lon: 101.68, packagesCount: 2, startingPrice: 28000, description: "Truly Asia, Divergent & Beautiful", region: "southeast-asia" },
  { name: "Baku (Azerbaijan)", lat: 40.40, lon: 49.86, packagesCount: 1, startingPrice: 34000, description: "Wind and Fire on the Caspian Coast", region: "middle-east" },
  { name: "Turkey", lat: 41.01, lon: 28.97, packagesCount: 2, startingPrice: 68000, description: "East Meets West Under Balloons", region: "europe" },
  { name: "Goa", lat: 15.29, lon: 74.12, packagesCount: 1, startingPrice: 9500, description: "Sun, Sand, and Seafood", region: "india" },
  { name: "Leh Ladakh", lat: 34.15, lon: 77.58, packagesCount: 1, startingPrice: 24000, description: "The Land of High Passes", region: "india" },
  { name: "Himachal Pradesh", lat: 31.10, lon: 77.17, packagesCount: 2, startingPrice: 14500, description: "Into the Heart of the Snow-Capped Valley", region: "india" },
  { name: "Uttarakhand", lat: 30.32, lon: 78.03, packagesCount: 1, startingPrice: 12000, description: "Sacred Hills and Glacial Rivers", region: "india" },
  { name: "Andaman & Nicobar", lat: 11.62, lon: 92.73, packagesCount: 1, startingPrice: 22500, description: "Tropical Reefs and Sparkling Shorelines", region: "islands" },
  { name: "Mauritius", lat: -20.34, lon: 57.55, packagesCount: 1, startingPrice: 58000, description: "A Contrast of Sapphire Reefs and Valleys", region: "islands" },
  { name: "Seychelles", lat: -4.68, lon: 55.45, packagesCount: 1, startingPrice: 85000, description: "Pristine Tropical Paradise", region: "islands" },
  { name: "Switzerland", lat: 46.80, lon: 8.23, packagesCount: 1, startingPrice: 115000, description: "Lakes, Gorges, and Alpine Peaks", region: "europe" },
  { name: "United Kingdom", lat: 51.50, lon: -0.12, packagesCount: 1, startingPrice: 85000, description: "Royalty, Castles, and Green Fields", region: "europe" },
];


interface GlobeViewerProps {
  onSelectDestination: (name: string) => void;
  activeRegion?: string;
}

interface GeoJSONFeature {
  geometry: {
    type: string;
    coordinates: number[][][] | number[][][][];
  };
}

export default function GlobeViewer({ onSelectDestination, activeRegion = "all" }: GlobeViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<{
    show: boolean;
    x: number;
    y: number;
    marker: Marker | null;
  }>({ show: false, x: 0, y: 0, marker: null });

  const [previewPanel, setPreviewPanel] = useState<Marker | null>(null);

  // References to meshes for dynamic highlighting
  const markerObjectsRef = useRef<{
    mesh: THREE.Mesh;
    ringMesh: THREE.Mesh;
    lineMesh: THREE.Line;
    particleMesh: THREE.Mesh;
    ringState: { baseOpacity: number };
    data: Marker;
  }[]>([]);

  // Function to update highlighted regions dynamically
  const updateHighlights = React.useCallback((region: string) => {
    if (!markerObjectsRef.current || markerObjectsRef.current.length === 0) return;

    markerObjectsRef.current.forEach((obj) => {
      const isMatched = region === "all" || obj.data.region === region;

      // Animate scale of the destination dot (keep it slightly visible if inactive)
      gsap.to(obj.mesh.scale, {
        x: isMatched ? 1.0 : 0.6,
        y: isMatched ? 1.0 : 0.6,
        z: isMatched ? 1.0 : 0.6,
        duration: 0.6,
        ease: "power2.out",
      });

      // Animate opacity of destination dot (dim but don't completely disappear)
      gsap.to(obj.mesh.material, {
        opacity: isMatched ? 1.0 : 0.3,
        duration: 0.6,
        ease: "power2.out",
      });

      // Animate base opacity of pulsing ring (completely fade out when unmatched to avoid ghost rings)
      gsap.to(obj.ringState, {
        baseOpacity: isMatched ? 0.8 : 0.0,
        duration: 0.6,
        ease: "power2.out",
      });

      // Animate opacity of route line
      gsap.to(obj.lineMesh.material, {
        opacity: isMatched ? 0.35 : 0.02,
        duration: 0.6,
        ease: "power2.out",
      });

      // Animate opacity & visibility of particle
      gsap.to(obj.particleMesh.material, {
        opacity: isMatched ? 0.9 : 0.0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          obj.particleMesh.visible = isMatched;
        }
      });

      if (isMatched) {
        obj.particleMesh.visible = true;
      }
    });
  }, []);

  // Sync region changes with the Three.js scene meshes
  useEffect(() => {
    updateHighlights(activeRegion);
  }, [activeRegion, updateHighlights]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x150f0a, 0.002);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    // Position camera straight on z-axis looking down at flat plane
    camera.position.set(0, 0, 110);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x150f0a, 1.0); // Make canvas solid dark espresso
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    
    // Pulsing sonar rings array
    const pulsingRings: {
      mesh: THREE.Mesh;
      minScale: number;
      maxScale: number;
      currentScale: number;
      speed: number;
      baseOpacity: number;
    }[] = [];

    // Flying sparks array
    const particles: {
      mesh: THREE.Mesh;
      curve: THREE.QuadraticBezierCurve3;
      progress: number;
      speed: number;
    }[] = [];
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 40;
    controls.maxDistance = 105;
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
      color: 0x150f0a, // Deep brand espresso
      transparent: true,
      opacity: 1.0,
      side: THREE.DoubleSide
    });
    const globe = new THREE.Mesh(mapPlaneGeo, mapPlaneMat);
    scene.add(globe);

    // Decorative grid overlay on plane
    const pointsGeometry = new THREE.PlaneGeometry(170, 85, 24, 12);
    const wireframeGlobe = new THREE.Mesh(
      pointsGeometry,
      new THREE.MeshBasicMaterial({
        color: 0xd4a017, // Subtle brand gold
        wireframe: true,
        transparent: true,
        opacity: 0.03,
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
          opacity: 0.5,
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
          opacity: 0.15,
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
      transparent: true,
      opacity: 1.0,
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
    
    const hubRingGeo = new THREE.RingGeometry(0.6, 1.2, 32);
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

    pulsingRings.push({
      mesh: hubRingMesh,
      minScale: 0.5,
      maxScale: 2.2,
      currentScale: 1.0,
      speed: 0.012,
      baseOpacity: 0.8,
    });

    // Reset our React ref array
    markerObjectsRef.current = [];

    // Draw route arcs from Mathura to destinations (rising out of the map)
    const drawRouteArc = (p1: THREE.Vector3, p2: THREE.Vector3) => {
      const dist = p1.distanceTo(p2);
      const midPoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      const controlPoint = new THREE.Vector3(midPoint.x, midPoint.y, dist * 0.28 + 3.0);
      
      const curve = new THREE.QuadraticBezierCurve3(p1, controlPoint, p2);
      const points = curve.getPoints(40);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      
      const material = new THREE.LineBasicMaterial({
        color: 0xd4a017,
        transparent: true,
        opacity: 0.35,
      });
      
      const line = new THREE.Line(geometry, material);
      markerGroup.add(line);
      return { curve, line };
    };

    const particleGeometry = new THREE.SphereGeometry(0.35, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({
      color: 0xffdb6e, // Bright gold-white spark
      transparent: true,
      opacity: 0.9,
    });

    MARKERS.forEach((m) => {
      const position = latLonToVector3(m.lat, m.lon, 0.5);
      const markerMesh = new THREE.Mesh(markerGeometry, markerMaterial.clone());
      markerMesh.position.copy(position);

      const ringGeo = new THREE.RingGeometry(0.6, 1.0, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xf0c040,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
      });
      
      // Clone ring material so each has its own instance
      const ringMesh = new THREE.Mesh(ringGeo, ringMat.clone());
      ringMesh.position.copy(position);
      
      markerGroup.add(ringMesh);
      markerGroup.add(markerMesh);
      markerObjects.push({ mesh: markerMesh, data: m });

      const ringState = {
        mesh: ringMesh,
        minScale: 0.5,
        maxScale: 2.5,
        currentScale: 0.5 + Math.random() * 2.0, // Stagger starting scales
        speed: 0.008 + Math.random() * 0.006,
        baseOpacity: 0.8,
      };

      pulsingRings.push(ringState);

      // Draw arc routes and create flying particle for each
      const { curve, line } = drawRouteArc(mathuraPos, position);
      
      const particleMesh = new THREE.Mesh(particleGeometry, particleMaterial.clone());
      particleMesh.position.copy(mathuraPos);
      markerGroup.add(particleMesh);

      particles.push({
        mesh: particleMesh,
        curve: curve,
        progress: Math.random(), // Stagger particles
        speed: 0.003 + Math.random() * 0.003,
      });

      // Populate our ref for external activeRegion changes
      markerObjectsRef.current.push({
        mesh: markerMesh,
        ringMesh: ringMesh,
        lineMesh: line,
        particleMesh: particleMesh,
        ringState: ringState,
        data: m,
      });
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
      // Calculate visible height and width at the current camera distance
      const visibleHeight = 2 * camera.position.z * Math.tan((camera.fov * Math.PI) / 360);
      const visibleWidth = visibleHeight * camera.aspect;

      // Max allowed target offset so the map boundaries do not enter the viewport
      const maxX = Math.max(0, (170 - visibleWidth) / 2);
      const maxY = Math.max(0, (85 - visibleHeight) / 2);

      const minX = -maxX;
      const minY = -maxY;

      if (controls.target.x < minX) {
        camera.position.x += minX - controls.target.x;
        controls.target.x = minX;
      }
      if (controls.target.x > maxX) {
        camera.position.x += maxX - controls.target.x;
        controls.target.x = maxX;
      }
      if (controls.target.y < minY) {
        camera.position.y += minY - controls.target.y;
        controls.target.y = minY;
      }
      if (controls.target.y > maxY) {
        camera.position.y += maxY - controls.target.y;
        controls.target.y = maxY;
      }

      controls.update();

      // Animate pulsing sonar rings
      pulsingRings.forEach((ring) => {
        ring.currentScale += ring.speed;
        if (ring.currentScale > ring.maxScale) {
          ring.currentScale = ring.minScale;
        }
        ring.mesh.scale.set(ring.currentScale, ring.currentScale, 1);
        const progress = (ring.currentScale - ring.minScale) / (ring.maxScale - ring.minScale);
        (ring.mesh.material as THREE.MeshBasicMaterial).opacity = ring.baseOpacity * (1 - progress);
      });

      // Animate flying sparks
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
        }
        const pos = p.curve.getPointAt(p.progress);
        p.mesh.position.copy(pos);
      });

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

    // Initial trigger of activeRegion highlight state
    updateHighlights(activeRegion);

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
  }, [onSelectDestination, activeRegion, updateHighlights]);

  return (
    <div className="relative w-full h-[65vh] min-h-[450px] lg:h-[75vh] flex items-center justify-center bg-[#150f0a] rounded-3xl border border-[#d4a017]/20 shadow-2xl overflow-hidden">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />


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
          <GlassCard hover={false} className="p-6 bg-background/95 border border-[#D4A017]/25 shadow-2xl relative">
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
