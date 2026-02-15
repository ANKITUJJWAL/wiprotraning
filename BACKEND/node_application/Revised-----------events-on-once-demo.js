// Import the events module
const EventEmitter = require('events');
// Create an emitter object
const myEmitter = new EventEmitter();

//adding multiple listeners to event
myEmitter.on('morningAlarm', () => console.log('Wake up!'));
myEmitter.on('morningAlarm', () => console.log('Brush your teeth!'));

const cb = () => console.log('Time for breakfast!');
myEmitter.on('morningAlarm', cb);

myEmitter.emit('morningAlarm');

// removing specific listener
myEmitter.removeListener('morningAlarm', cb);

myEmitter.emit('morningAlarm');

//removes all listeners for morningAlarm event
myEmitter.removeAllListeners('morningAlarm'); 
myEmitter.emit('morningAlarm'); // no output

// .once method replacing .on method
myEmitter.once('start', () => console.log('System started.'));
myEmitter.emit('start');
myEmitter.emit('start'); // ignored second time

// error is built-in event
myEmitter.on('error', (err) => {
  console.error('An error occurred:', err.message);
});

myEmitter.emit('error',  new Error('Something went wrong!'));

//Download simulation
const downloader = new EventEmitter();

downloader.on('start', () => console.log('Download started...'));
downloader.on('progress', (p) => console.log(`Downloaded ${p}%`));
downloader.on('end', () => console.log('Download completed!'));

downloader.emit('start');
for (let i = 25; i <= 100; i += 25) {
  downloader.emit('progress', i);
}
downloader.emit('end');
