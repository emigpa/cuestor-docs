module.exports = {
  title: `CUESTOR`,
  port: '9003',
  host: '0.0.0.0',
  base: '/cuestor-docs/',
  dest: 'docs',
  themeConfig: {
    sidebar: [
      ['/', 'Introduccion'],
      ['procedimiento', 'Procedimiento (resumen)'],
      ['/notasmodelo', 'Notas modelo y anexos'],
      ['/manualDeOperaciones', 'Manual de operaciones'],
      ['/faq', 'Preguntas frecuentes'],
      ['/contactos', 'Contactos']
    ],
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Github', link: 'https://github.com/emigpa' }
    ]
  },
  markdown: {
    toc: { includeLevel: [2, 3] }
    // config: md => {
    //   md.use(require('markdown-it-katex'))
    // }
  }
}
