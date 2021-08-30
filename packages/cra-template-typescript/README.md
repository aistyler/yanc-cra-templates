# @yanc/cra-template-typescript

## Usage

```sh
# e.g. using @yanc/react-scripts
npx create-react-app app --scripts-version "@yanc/react-scripts@github:aistyler/yanc-react-scripts#semver:~4.0.0" --template "@yanc/cra-template-typescript@github:aistyler/yanc-cra-templates#workspace=@yanc/cra-template-typescript&tag=@yanc/cra-template-typescript/1.0.0"

# e.g. using default react-scripts
npx create-react-app app --template "@yanc/cra-template-typescript@github:aistyler/yanc-cra-templates#workspace=@yanc/cra-template-typescript&tag=@yanc/cra-template-typescript/1.0.0"
```

## Testing a template on local

```npx create-react-app {app-name} --template @yanc/cra-template-typescript@file:{absolute_path_to_template}```

```sh
# e.g.
npx create-react-app app --template @yanc/cra-template-typescript@file:$PWD/../packages/cra-template-typescript
```
