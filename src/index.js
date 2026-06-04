import 'font-awesome/css/font-awesome.min.css'

const modules = import.meta.glob('./components/**/index.{vue,js}', { eager: true })

const compList = []
const pluginList = []

for (const path in modules) {
    const module = modules[path].default

    if (typeof module === 'object' && typeof module.install === 'function') {
        pluginList.push(module)
    } else {
        compList.push(module)
    }
}

const install = (app) => {
    compList.forEach((comp) => {
        if (!comp?.name) return

        const componentName = comp.name
            .replace(/Pk/g, 'pk-')
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .toLowerCase()

        app.component(componentName, comp)
    })

    pluginList.forEach((plugin) => {
        if (typeof plugin.install === 'function') {
            plugin.install(app)
        }
    })
}

export * from './exports.js'

export default { install }
