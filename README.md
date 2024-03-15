# edu-components

## Instructions 

```bash
cd ~
cd ws
git clone https://github.com/miwashi-edu/edu-components.git
cd edu-components
npm init
mkdir ./src/components/atoms/LogoText/
touch ./src/components/atoms/LogoText/LogoText.module.css
touch ./src/components/atoms/LogoText/index.js
mkdir ./src/components/atoms/LogoImage/
touch ./src/components/atoms/LogoImage/LogoImage.module.css
touch ./src/components/atoms/LogoImage/index.js
mkdir ./src/components/molecules/CompanyLogo/
touch ./src/components/molecules/CompanyLogo/CompanyLogo.module.css
touch ./src/components/molecules/CompanyLogo/index.js
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
import LogoText from './components/atoms/LogoText';
import CompanyLogo from './components/molecules/CompanyLogo';

export { LogoImage, LogoText, CompanyLogo };
EOF
```


### ./src/components/atoms/LogoImage/index.js

```bash
cd ~
cd ws
cd edu-components
cat > ./src/components/atoms/LogoImage/index.js << 'EOF'
//for bundling
export {default as LogoImage} from "./LogoImage"

//for storybook
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

### ./src/components/atoms/LogoText/index.js

```bash
cd ~
cd ws
cd edu-components
cat > ./src/components/atoms/LogoText/index.js << 'EOF'
//for bundling
export {default as LogoText} from "./LogoText"

//for storybook
export {default} from "./LogoText"
EOF
```

### ./src/components/atoms/LogoText/LogoText.jsx

```bash
cd ~
cd ws
cd edu-components
cat > ./src/components/atoms/LogoText/LogoText.jsx << 'EOF'
import React from 'react';
import styles from './LogoText.module.css';

const LogoText = ({ text, className = '' }) => (
  <div className={`${styles.text} ${className}`}>
    {text}
  </div>
);

export default LogoText;
EOF
```

### ./src/stories/LogoText.stories.jsx

```bash
cd ~
cd ws
cd edu-components
cat > ./src/stories/LogoText.stories.jsx << 'EOF'
import React from 'react';
import LogoText from '../components/atoms/LogoText';

export default {
  title: 'Components/Atoms/LogoText',
  component: LogoText,
  argTypes: {
    text: { control: 'text' },
    className: { control: 'text' },
  },
};

const Template = (args) => <LogoText {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Company Name',
};
EOF
```

### ./src/components/atoms/CompanyLogo/index.js

```bash
cd ~
cd ws
cd edu-components
cat > ./src/components/molecules/CompanyLogo/index.js << 'EOF'
//for bundling
export {default as CompanyLogo} from "./CompanyLogo"

//for storybook
export {default} from "./CompanyLogo"
EOF
```

### ./src/components/molecules/CompanyLogo/CompanyLogo.jsx

```bash
cd ~
cd ws
cd edu-components
cat > ./src/components/molecules/CompanyLogo/CompanyLogo.jsx << 'EOF'
import React from 'react';
import LogoImage from './LogoImage';
import LogoText from './LogoText';
import styles from './CompanyLogo.module.css';

const CompanyLogo = ({ text }) => (
  <div className={styles.companyLogo}>
    <LogoImage className={styles.logoImage} />
    <LogoText text={text} className={styles.logoText} />
  </div>
);

export default CompanyLogo;
EOF
```

### ./src/stories/CompanyLogo.stories.jsx

```bash
cd ~
cd ws
cd edu-components
cat > ./src/stories/CompanyLogo.stories.jsx << 'EOF'
import React from 'react';
import LogoText from '../components/atoms/LogoText';

export default {
  title: 'Components/Atoms/LogoText',
  component: LogoText,
  argTypes: {
    text: { control: 'text' },
    className: { control: 'text' },
  },
};

const Template = (args) => <LogoText {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Company Name',
};
EOF
```

