import ansynGlobal from 'ansyn-cdn';


import React from 'react';


class App extends React.Component {

    ansynBuild;
    layout;
    f
    constructor(props) {
        super(props);
        this.layout = false
    }
    render() {
        return (
            <div>
            <button onClick={this.changeLayout.bind(this)}>change layout</button>
            <button onClick={this.loadAnsyn.bind(this)}>load ansyn</button>
            </div>
        );
    }

    changeLayout() {
        // this.layout = typeof this.layout==='undefind'? false : true;
        this.layout = !this.layout;
        const layout = this.layout? 'layout1' : 'layout4';
        if (this.ansynBuild) {
            this.ansynBuild.api.changeMapLayout(layout);
        }

    }
    loadAnsyn() {

        this.ansynBuild = new ansynGlobal.AnSynBuilder('ansynMap',"/app.config.json")
    }
}

export default App;