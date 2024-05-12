# edu-components

## Instructions 

```bash
cd ~
cd ws
git clone https://github.com/miwashi-edu/edu-components.git
cd edu-components
npm init
mkdir ./src/components/atoms/LogoTitle/
touch ./src/components/atoms/LogoTitle/LogoTitle.module.css
touch ./src/components/atoms/LogoTitle/index.js
mkdir ./src/components/atoms/LogoImage/
touch ./src/components/atoms/LogoImage/LogoImage.module.css
touch ./src/components/atoms/LogoImage/index.js
mkdir ./src/components/molecules/Logo/
touch ./src/components/molecules/Logo/Logo.module.css
touch ./src/components/molecules/Logo/index.js
```

## Test it

```bash
npm start
```

## Files

### ./src/index.js

```bash
cd ~
cd ws
cd edu-components
cat > ./src/index.js << 'EOF'
import LogoImage from './components/atoms/LogoImage';
import LogoTitle from './components/atoms/LogoTitle';
import Logo from './components/molecules/Logo';

export { LogoImage, LogoTitle, Logo };
EOF
```


### ./src/components/atoms/LogoImage/index.js

```bash
cd ~
cd ws
cd edu-components
cat > ./src/components/atoms/LogoImage/index.js << 'EOF'
//for bundling, Named export
//import { LogoImage } from 'module-name';
export {default as LogoImage} from "./LogoImage"

//for storybook default export
//import differentName from 'module-name';
export {default} from "./LogoImage"
EOF
```


### ./src/components/atoms/LogoImage/LogoImage.jsx

```bash
cd ~
cd ws
cd edu-components
cat > ./src/components/atoms/LogoImage/LogoImage.jsx << 'EOF'
import React from 'react';
import styles from './LogoImage.module.css'; 

const LogoImage = ({ className = '' }) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="512pt"
    height="512pt"
    viewBox="0 0 512.000000 512.000000"
    preserveAspectRatio="xMidYMid meet"
    className={className}
  >
    <g
      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path d="M2797 4253 c-10 -9 -9 -871 1 -876 5 -2 1097 107 1120 112 1 1 2 149 2 330 l0 330 -42 6 c-52 7 -1042 105 -1061 105 -8 0 -17 -3 -20 -7z" />
      <path d="M2045 3969 c-259 -26 -571 -57 -695 -69 -124 -11 -240 -23 -258 -26 l-32 -6 2 -437 3 -436 715 -71 c393 -40 736 -74 763 -76 l47 -5 0 588 0 589 -37 -1 c-21 -1 -249 -23 -508 -50z" />
      <path d="M3545 3264 c-401 -41 -736 -76 -742 -79 -10 -3 -13 -135 -13 -610 0 -475 3 -607 13 -610 14 -6 1375 -142 1462 -147 l60 -3 0 760 0 760 -25 2 c-14 1 -353 -32 -755 -73z" />
      <path d="M320 1970 l0 -942 83 6 c74 6 2152 116 2184 116 11 0 13 133 13 744 l0 743 -62 7 c-35 4 -227 27 -428 51 -201 24 -671 80 -1045 124 -374 45 -695 83 -712 86 l-33 6 0 -941z" />
      <path d="M2797 1763 c-10 -9 -9 -1251 1 -1257 5 -3 116 6 248 20 131 13 307 30 389 38 83 8 257 25 388 37 l237 24 0 507 0 507 -32 5 c-18 3 -107 13 -198 21 -91 9 -248 25 -350 35 -102 11 -282 28 -400 40 -118 11 -229 23 -246 25 -17 3 -33 2 -37 -2z" />
    </g>
  </svg>
);

export default LogoImage;
EOF
```

### ./src/stories/LogoImage.stories.jsx

```bash
cd ~
cd ws
cd edu-components
cat > ./src/stories/LogoImage.stories.jsx << 'EOF'
import React from 'react';
import LogoImage from '../components/atoms/LogoImage';

export default {
    title: 'Components/Atoms/LogoImage',
    component: LogoImage,
    argTypes: {
        className: { control: 'text' },
    },
};

const Template = (args) => <LogoImage {...args} />;

export const Default = Template.bind({});
Default.args = {
    className: '',
};
EOF
```



### ./src/components/atoms/LogoTitle/index.js

```bash
cd ~
cd ws
cd edu-components
cat > ./src/components/atoms/LogoTitle/index.js << 'EOF'
//for bundling, Named export
//import { LogoTitle } from '@wacoco/edu-components';
export {default as LogoTitle} from "./LogoTitle"

//for storybook default export
//import differentName from '@wacoco/edu-components';
export {default} from "./LogoTitle"
EOF
```

### ./src/components/atoms/LogoTitle/LogoTitle.jsx

```bash
cd ~
cd ws
cd edu-components
cat > ./src/components/atoms/LogoTitle/LogoTitle.jsx << 'EOF'
import React from 'react';
import styles from './LogoTitle.module.css';

const LogoTitle = ({ text, className = '' }) => (
  <div className={`${styles.text} ${className}`}>
    {text}
  </div>
);

export default LogoTitle;
EOF
```

### ./src/stories/LogoTitle.stories.jsx

```bash
cd ~
cd ws
cd edu-components
cat > ./src/stories/LogoTitle.stories.jsx << 'EOF'
import React from 'react';
import LogoTitle from '../components/atoms/LogoTitle';

export default {
  title: 'Components/Atoms/LogoTitle',
  component: LogoTitle,
  argTypes: {
    text: { control: 'text' },
    className: { control: 'text' },
  },
};

const Template = (args) => <LogoTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Company Name',
};
EOF
```

### ./src/components/atoms/Logo/index.js

```bash
cd ~
cd ws
cd edu-components
cat > ./src/components/molecules/Logo/index.js << 'EOF'
//for bundling, Named export
//import { Logo } from '@wacoco/edu-components';
export {default as Logo} from "./Logo"

//for storybook default export
//import differentName from '@wacoco/edu-components';
export {default} from "./Logo"
EOF
```

### ./src/components/molecules/Logo/Logo.jsx

```bash
cd ~
cd ws
cd edu-components
cat > ./src/components/molecules/Logo/Logo.jsx << 'EOF'
import React from 'react';
import LogoImage from './LogoImage';
import LogoTitle from './LogoTitle';
import styles from './Logo.module.css';

const Logo = ({ text }) => (
  <div className={styles.Logo}>
    <LogoImage className={styles.logoImage} />
    <LogoTitle text={text} className={styles.LogoTitle} />
  </div>
);

export default Logo;
EOF
```

### ./src/stories/Logo.stories.jsx

```bash
cd ~
cd ws
cd edu-components
cat > ./src/stories/Logo.stories.jsx << 'EOF'
import React from 'react';
import LogoTitle from '../components/atoms/LogoTitle';

export default {
  title: 'Components/Atoms/Logo',
  component: LogoTitle,
  argTypes: {
    text: { control: 'text' },
    className: { control: 'text' },
  },
};

const Template = (args) => <LogoTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Company Name',
};
EOF
```

