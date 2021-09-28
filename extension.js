const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "test" is now active!');

	const helpTreeView = vscode.window.createTreeView('test.testTree',{ new vscode.TreeView(FUnction(){});  });
	helpTreeView.push()
    context.subscriptions.push(helpTreeView);

	context.subscriptions.push(
		vscode.commands.registerCommand('test.helloWorld', function () {
			const myt = vscode.window.activeTerminal;
			if(myt){
				myt.show();
				myt.sendText('php -i');
			}else{
				const terminal = vscode.window.createTerminal();
				terminal.show();
				terminal.sendText('php -m');
			}
		})
	);
}
// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
