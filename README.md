# basis-bin

basis bin-wrapper that makes it seamlessly available as a local dependency

## Usage

```js
const {execFile} = require('child_process');
const basis = require('basis-bin');

execFile(basis, ['input.png', '-output_file', 'output.basis'], err => {
  if (err) throw err;
  console.log('Image is converted!');
});
```

## CLI

You can install `basis` globally.

```bash
npm install --global basis-bin
```

And use it as a CLI command.

```bash
basis --help
```
