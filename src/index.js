import Dialog from '../packages/dialog'

import Table from '../packages/table'
import TableColumn from '../packages/table-column'

import Form from '../packages/form'
import FormItem from '../packages/form-item'
import Select from '../packages/select'
import Forms from '../packages/forms'

import Upload from '../packages/upload'
import packageConfig from '../package.json'

const components = [Dialog, Table, TableColumn, Form, FormItem, Select, Forms, Upload]

const install = function (Vue, opts = {}) {
	components.forEach(component => {
		Vue.component(component.name, component)
	})

	Vue.prototype.$ELEMENT = {
		size: opts.size || '',
		zIndex: opts.zIndex || 2000
	}
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	version: packageConfig.version,
	install,
	...components
}
