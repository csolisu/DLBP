import re

files = ["editor.html", "nodos.html", "recursos-compartidos.js"]
patterns = ["group-fractal", "frac_", "estocasticGroup", "algorithmGroupData", "ui-d-algo-frac", "tpl-dither"]

for filepath in files:
    print(f"\n=== SEARCHING IN {filepath} ===")
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            lines = f.readlines()
        for idx, line in enumerate(lines):
            line_num = idx + 1
            for pattern in patterns:
                if pattern in line:
                    print(f"{line_num}: {line.strip()}")
                    break
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

