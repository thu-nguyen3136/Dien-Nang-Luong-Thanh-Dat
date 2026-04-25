import os

file_path = r'e:\My Website\Dien-Nang-Luong-Mat-Troi\data\db.json'
pos = 22128

if os.path.exists(file_path):
    with open(file_path, 'rb') as f:
        f.seek(max(0, pos - 100))
        chunk = f.read(200)
        print(f"Chunk around position {pos}:")
        print(chunk)
        
        # Check for control characters in the chunk
        for i, byte in enumerate(chunk):
            if byte < 32 and byte not in (9, 10, 13): # Not tab, LF, CR
                print(f"Found control character {byte} at position {pos - 100 + i}")
else:
    print("File not found")
