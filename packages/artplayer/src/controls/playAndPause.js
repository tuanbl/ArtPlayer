import { append, tooltip, setStyle } from '../utils';

export default function playAndPause(controlOption) {
    return art => ({
        ...controlOption,
        mounted: $control => {
            const {
                events: { proxy },
                icons,
                i18n,
                player,
            } = art;

            const $play = append($control, icons.play);
            const $pause = append($control, icons.pause);
            tooltip($play, i18n.get('Play'));
            tooltip($pause, i18n.get('Pause'));

            proxy($play, 'click', () => {
                player.play();
            });

            proxy($pause, 'click', () => {
                player.pause();
            });

            function showPlay() {
                setStyle($play, 'display', 'flex');
                setStyle($pause, 'display', 'none');
            }

            function showPause() {
                setStyle($play, 'display', 'none');
                setStyle($pause, 'display', 'flex');
            }

            if (player.playing) {
                showPause();
            } else {
                showPlay();
            }

            art.on('video:playing', () => {
                showPause();
            });

            art.on('video:pause', () => {
                showPlay();
            });
        },
    });
}
