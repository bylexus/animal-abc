var listeners = {};
var register = function(ev,handler) {
    if (!listeners[ev]) listeners[ev] = [];
    listeners[ev].push(handler);
};

var fireEvent = function(ev, ...args) {
    if (listeners[ev]) {
        Array.forEach(listeners[ev],(handler) => {
            handler.apply(this,args);
        });
    }
};



module.exports = {
    register,
    fireEvent
};
