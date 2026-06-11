#!/bin/bash
# Run this script from inside the website/ folder to download all images from sriomkarprojects.com
# Usage: bash download-images.sh

BASE="https://sriomkarprojects.com/public/assets/img"

mkdir -p public/assets/img/projects
mkdir -p public/assets/img/ongoing
mkdir -p public/assets/img/interior
mkdir -p public/assets/img/imagebox
mkdir -p public/assets/img/slider

echo "📦 Downloading project images..."
declare -a PROJECTS=(
  "saligrama.jpg"
  "Ampar.jpeg"
  "Nellikatte.jpg"
  "Byndoor.jpg"
  "Kandloor c.jpg"
  "Koteshwara1.jpg"
  "koni.jpg"
  "Trasi.jpeg"
  "gujjadi c.jpg"
  "doctor.jpg"
  "kunapura,kodi.jpg"
)
for img in "${PROJECTS[@]}"; do
  encoded=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$img'))")
  curl -L -s -o "public/assets/img/projects/$img" "$BASE/projects/$encoded" && echo "✓ projects/$img" || echo "✗ FAILED: projects/$img"
done

echo ""
echo "📦 Downloading ongoing/3D images..."
declare -a ONGOING=(
  "Resort_3D_v_01.jpg"
  "Resort_3D_v_02.jpg"
  "shankarnarayana new  - Copy.jpg"
  "Tekkathe_Site_3D_Option_02.jpg"
  "Navdrkeri kundapur Sathis_3D.jpg"
)
for img in "${ONGOING[@]}"; do
  encoded=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$img'))")
  curl -L -s -o "public/assets/img/ongoing/$img" "$BASE/ongoing/$encoded" && echo "✓ ongoing/$img" || echo "✗ FAILED: ongoing/$img"
done

echo ""
echo "📦 Downloading interior images..."
for i in $(seq 1 16); do
  curl -L -s -o "public/assets/img/interior/interior-$i.jpg" "$BASE/interior/interior-$i.jpg" && echo "✓ interior-$i.jpg" || echo "✗ FAILED: interior-$i.jpg"
done

echo ""
echo "📦 Downloading service/imagebox images..."
declare -a IMAGEBOX=(
  "INTERIOR-DESIGN.jpg"
  "OLD-STRUCTURE.jpg"
  "PROJECT-MANAGEMENT.jpg"
  "PROJECT -MANAGEMENTsss.jpg"
  "STRUCTURAL-DESIGN.jpg"
)
for img in "${IMAGEBOX[@]}"; do
  encoded=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$img'))")
  curl -L -s -o "public/assets/img/imagebox/$img" "$BASE/imagebox/$encoded" && echo "✓ imagebox/$img" || echo "✗ FAILED: imagebox/$img"
done

echo ""
echo "📦 Downloading slider images..."
curl -L -s -o "public/assets/img/slider/slider-bg-3.jpg" "$BASE/slider/slider-bg-3.jpg" && echo "✓ slider-bg-3.jpg" || echo "✗ FAILED: slider-bg-3.jpg"
curl -L -s -o "public/assets/img/slider/slider-bg-4.jpg" "$BASE/slider/slider-bg-4.jpg" && echo "✓ slider-bg-4.jpg" || echo "✗ FAILED: slider-bg-4.jpg"

echo ""
echo "✅ Done! All images downloaded."
