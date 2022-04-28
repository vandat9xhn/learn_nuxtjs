//
export default (context, inject) => {
    inject('myConsoleLog', (msg) => console.log(msg));
};
