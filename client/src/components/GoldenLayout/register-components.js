import Diagram from '../Diagram'
import Properties from '../Properties'
import Alerts from '../Alerts'
import Summary from '../Summary'

class RegisterComponents {
    constructor(parent) {
        this._parent = parent

        this.setupComponents()
    }

    setupComponents() {
        this._parent._register({
            name: 'Summary',
            component: Summary,
            location: 'main',
            title: 'Summary',
            allowVerticalScroll: false,
        })
        this._parent._register({
            name: 'Universe',
            component: Diagram,
            location: 'main',
            title: 'Universe',
            skipClose: true,
        })
        this._parent._register({
            name: 'Properties',
            component: Properties,
            location: 'right',
            title: 'Properties',
            width: 25,
            allowVerticalScroll: true,
        })
        this._parent._register({
            name: 'Alerts',
            component: Alerts,
            location: 'bottom',
            title: 'Alerts',
            allowVerticalScroll: true,
        })
    }
}

export default RegisterComponents
