'use babel';

import DocoView from './doco-view';
import { CompositeDisposable } from 'atom';

export default {

  docoView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.docoView = new DocoView(state.docoViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.docoView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'doco:generateDoc': () => this.generateDoc()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.docoView.destroy();
  },

  serialize() {
    return {
      docoViewState: this.docoView.serialize()
    };
  },

  generateDoc() {
    console.log('Doco was toggled!');

    // Selecting a function and generating documentation for it
    if (editor = atom.workspace.getActiveTextEditor()) {

      selections = editor.getSelections()

      console.log(selections)
      for (var i = 0; i < selections.length; i++) {
        let funcText = selections[i].getText()
        selections[i].clear()
        // pass function to some value
        editor.insertText("\n/*Precondition: Insert precondition here*/\n")
        editor.insertText("/* Postcondition: Insert precondition here*/\n")
        editor.insertText("/* Usage: Insert usage here*/\n\n")
        
      }

      //configuration for the plugin
      //insert error checking

    }

      // Taking the whole file and selecting functions from it
      //
      // if (editor = atom.workspace.getActiveTextEditor()) {
      //
      //   // extract blocks of functions from the file
      //   // for each block append postcondition, precondition and usage
      //
      //   fullText = editor.selectAll()
      //
      //
      //   grammarList = atom.grammars.getGrammars()
      //   console.log(grammarList)
      //   for (var i = 0; i < grammarList.length; i++) {
      //     if (grammarList[i].packageName == "language-c"){
      //       cGrammar = grammarList[i]
      //     }
      //   }
      //
      //   tokenizedText = cGrammar.tokenizeLines(fullText)
      //   console.log(tokenizedText)
      //
      //
      //
      //
      //
      //
      //   //
      //   // selections = editor.getSelections()
      //   //
      //   // console.log(selections)
      //   // for (var i = 0; i < selections.length; i++) {
      //   //   let funcText = selections[i].getText()
      //   //   selections[i].clear()
      //   //   // pass function to some value
      //   //   editor.insertText("// Precondition: Insert precondition here\n")
      //   //   editor.insertText("// Postcondition: Insert precondition here\n")
      //   //   editor.insertText("// Usage: Insert usage here\n")
      //   //   console.log(atom.grammars)
      //   // }
      // }




  }

};
