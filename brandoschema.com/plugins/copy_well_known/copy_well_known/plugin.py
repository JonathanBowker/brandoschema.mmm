from mkdocs.plugins import BasePlugin
import shutil
import os

class CopyWellKnownPlugin(BasePlugin):
    def on_post_build(self, config):
        src = ".well-known"
        dst = os.path.join(config['site_dir'], ".well-known")

        if not os.path.exists(src):
            print("⚠️  [copy-well-known] Skipped: '.well-known' directory not found.")
            return

        if os.path.exists(dst):
            shutil.rmtree(dst)

        shutil.copytree(src, dst)
        print("✅ [copy-well-known] Copied .well-known directory to site/")
