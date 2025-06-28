import os

# Set your folder path here
folder = r'assets/gallery'  # e.g., 'C:/Users/you/Pictures/gallery'

# Choose a base name and extension (e.g., .jpg, .png)
new_extension = '.jpg'

# Get all files in the folder (skip directories)
files = [f for f in os.listdir(folder) if os.path.isfile(os.path.join(folder, f))]

# Sort for predictable order
files.sort()

# Rename each file
for i, filename in enumerate(files):
    new_name = f"{i}{new_extension}"
    old_path = os.path.join(folder, filename)
    new_path = os.path.join(folder, new_name)
    os.rename(old_path, new_path)
    print(f"Renamed: {filename} → {new_name}")
