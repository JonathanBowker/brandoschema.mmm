from setuptools import setup

setup(
    name='mkdocs-copy-well-known',
    version='0.1',
    py_modules=[],
    packages=['copy_well_known'],
    entry_points={
        'mkdocs.plugins': [
            'copy-well-known = copy_well_known:CopyWellKnownPlugin',
        ]
    },
)
