import glob, os
from pathlib import Path
from PIL import Image

BASE_DIR = Path(__file__).resolve().parent
paths = glob.glob(os.path.join(BASE_DIR, "media/*/*"))

for index, path in enumerate(paths):
	img = Image.open(path)
	img = img.convert('RGB') # JPEG does not support Alpha 

	name_full = path.split("/")[-1]
	name = ".".join(name_full.split(".")[:-1])
	folder_path = path.replace(name_full, "").replace("media/", "media-compressed/")
	os.makedirs(folder_path, exist_ok=True)

	save_path = os.path.join(folder_path, name+".jpg")
	img.save(save_path, quality=20, optimize=True)
	img.close()

	print(f"Compressed {name_full} ({index+1}/{len(paths)})")