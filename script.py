import os
import re

# Exclure les cas où ; est précédé par " ' ) } ou les entités &quot ; ou &apos ;
# On utilise un lookbehind alternatif avec | (OR)
pattern = re.compile(r'(?<!["\')\}])(?<!&quot)(?<!&apos)(?<!&amp)\s*;')

def check_file(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        for i, line in enumerate(f, 1):
            if ';' in line and pattern.search(line):
                print(f"{filepath}:{i}: {line.strip()}")

def scan_tsx_files(root='.'):
    for dirpath, dirnames, filenames in os.walk(root):
        # Exclure certains dossiers
        dirnames[:] = [d for d in dirnames if d not in ('node_modules', '.next', '.git')]
        for filename in filenames:
            if filename.endswith('.tsx'):
                full_path = os.path.join(dirpath, filename)
                check_file(full_path)

if __name__ == "__main__":
    scan_tsx_files()
