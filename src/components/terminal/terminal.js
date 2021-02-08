import React from 'react';
import { Terminal } from 'xterm';
import { AttachAddon } from 'xterm-addon-attach';  
import "xterm/css/xterm.css";

class MyTerminal extends React.Component{
    constructor(props){
        super(props);
        this.closed = true;
        this.term = null;
        this.terminalSocket = null;
        this.container_id = this.props.container_id; 
        this.runRealTerminal = this.runRealTerminal.bind(this);
        this.closeRealTerminal = this.closeRealTerminal.bind(this);
        this.ConnectToServer = this.ConnectToServer.bind(this);
    }
    runRealTerminal(res) {
        this.closed = false;
    }
    closeRealTerminal() {
        console.log("close");
        this.closed = true;
        this.term.writeln("");
        this.term.writeln("Terminl closed, press any button to restart...");
        this.term.writeln("");
    }
    ConnectToServer(){
        this.remoteHost='ws://193.112.177.167:8000/echo/' + this.container_id;
        this.terminalSocket = new WebSocket(this.remoteHost);
        this.terminalSocket.onopen = this.runRealTerminal;
        this.terminalSocket.onclose = this.closeRealTerminal;
        this.terminalSocket.onerror = this.errorRealTerminal;
        this.term.loadAddon(new AttachAddon(this.terminalSocket));
    }
    render(){
        return <div id='terminal'></div> ;
    }
    componentDidMount(){
        let terminalContainer = document.getElementById('terminal');
        this.term = new Terminal();
        // this.term = new Terminal({
        //     cursorBlink: true
        // });
        this.term.open(terminalContainer, true);
        this.ConnectToServer();
        this.term._initialized = true;
        console.log("mounted is going on");
        var __this = this;
        this.term.onData(function(key){
            if(__this.closed === true){
                __this.term.writeln("");
                __this.term.writeln("Terminl reconnected");
                __this.term.writeln("");
                __this.ConnectToServer();
            }
        })
    }
}

export default MyTerminal;