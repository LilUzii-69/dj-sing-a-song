module.exports = {
    app: {
        px: '!',
        token: 'OTA1MTMwNjYwODM3MDg5MzIx.YYFmng.qQZ2lXgWO8ehINhAFAoD6CxWMdk',
        playing: 'แบร่'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'Strix',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};