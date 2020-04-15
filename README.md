## Doco - Automatic documentation generation from source code

### Requirements
1. Atom. A guide to install atom can be found [here](http://tipsonubuntu.com/2016/08/05/install-atom-text-editor-ubuntu-16-04/)

2. NodeJS

### Install Doco
To install doco from source run the following commands:

```
cd ~/.atom/packages 
git clone https://github.com/m-shayanshafi/doco
cd doco
npm install
```

Make sure the correct permissions are set for the atom folder.

```
sudo chown -R `whoami` ~/.atom``


```
git clone https://github.com/javapathfinder/jpf-core
```

Build jpf-core :	

```
./gradlew buildJars
```