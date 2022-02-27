module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /(text|bg|border|ring)-(eutpc|eutsc|euttc|ustpc|ustsc|usttc)/,
    },
  ],
  theme: {
    fontFamily: {
      body: ['Roboto', 'Arial', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        eutpc: '#013399',
        eutsc: '#ffcc01',
        euttc: '#ffffff',
        ustpc: '#ed1e15',
        ustsc: '#002868',
        usttc: '#ffffff',
      },
      screens: {
        sm: '575px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
    },
  },
  plugins: [],
};
