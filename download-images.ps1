# Run this from inside the website folder:
# PowerShell: .\download-images.ps1

$BASE = "https://sriomkarprojects.com/public/assets/img"

# Create directories
New-Item -ItemType Directory -Force -Path "public\assets\img\projects" | Out-Null
New-Item -ItemType Directory -Force -Path "public\assets\img\ongoing" | Out-Null
New-Item -ItemType Directory -Force -Path "public\assets\img\interior" | Out-Null
New-Item -ItemType Directory -Force -Path "public\assets\img\imagebox" | Out-Null
New-Item -ItemType Directory -Force -Path "public\assets\img\slider" | Out-Null

function Download-Image($folder, $filename) {
    $encoded = [Uri]::EscapeDataString($filename)
    $url = "$BASE/$folder/$encoded"
    $dest = "public\assets\img\$folder\$filename"
    try {
        Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing
        Write-Host "OK  $folder/$filename" -ForegroundColor Green
    } catch {
        Write-Host "FAIL $folder/$filename - $_" -ForegroundColor Red
    }
}

Write-Host "`nDownloading project images..." -ForegroundColor Cyan
@("saligrama.jpg","Ampar.jpeg","Nellikatte.jpg","Byndoor.jpg","Kandloor c.jpg",
  "Koteshwara1.jpg","koni.jpg","Trasi.jpeg","gujjadi c.jpg","doctor.jpg",
  "kunapura,kodi.jpg") | ForEach-Object { Download-Image "projects" $_ }

Write-Host "`nDownloading ongoing/3D images..." -ForegroundColor Cyan
@("Resort_3D_v_01.jpg","Resort_3D_v_02.jpg","shankarnarayana new  - Copy.jpg",
  "Tekkathe_Site_3D_Option_02.jpg","Navdrkeri kundapur Sathis_3D.jpg") | ForEach-Object { Download-Image "ongoing" $_ }

Write-Host "`nDownloading interior images..." -ForegroundColor Cyan
1..16 | ForEach-Object { Download-Image "interior" "interior-$_.jpg" }

Write-Host "`nDownloading service/imagebox images..." -ForegroundColor Cyan
@("INTERIOR-DESIGN.jpg","OLD-STRUCTURE.jpg","PROJECT-MANAGEMENT.jpg",
  "PROJECT -MANAGEMENTsss.jpg","STRUCTURAL-DESIGN.jpg") | ForEach-Object { Download-Image "imagebox" $_ }

Write-Host "`nDownloading slider images..." -ForegroundColor Cyan
@("slider-bg-3.jpg","slider-bg-4.jpg") | ForEach-Object { Download-Image "slider" $_ }

Write-Host "`nAll done!" -ForegroundColor Yellow
