import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function htaccess(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const content = `RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]`;

    // Ścieżka, w której plik .htaccess zostanie utworzony
    const filePath = '/.htaccess';

    // Tworzenie pliku .htaccess z określoną zawartością
    tree.create(filePath, content);

    return tree;
  };
}
