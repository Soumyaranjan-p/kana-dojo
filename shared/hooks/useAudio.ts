'use client';
import { useCallback } from 'react';
import useSound from 'use-sound';
import { Random } from 'random-js';
import usePreferencesStore from '@/features/Preferences/store/usePreferencesStore';

const random = new Random();

const clickSoundUrls = [
  /* '/sounds/click/click9/click9_1.wav',
  '/sounds/click/click9/click9_2.wav',
  '/sounds/click/click9/click9_3.wav',
  '/sounds/click/click9/click9_4.wav',
  '/sounds/click/click9/click9_5.wav'
 */
  '/sounds/click/click4/click4_11.wav',
  '/sounds/click/click4/click4_22.wav',
  '/sounds/click/click4/click4_33.wav',
  '/sounds/click/click4/click4_44.wav'
];

export const useClick = () => {
  const silentMode = usePreferencesStore(state => state.silentMode);

  // Instead of mapping, call each useSound explicitly:
  const [play1] = useSound(clickSoundUrls[0], {
    volume: 1,
    interrupt: true,
    soundEnabled: !silentMode
  });
  const [play2] = useSound(clickSoundUrls[1], {
    volume: 1,
    interrupt: true,
    soundEnabled: !silentMode
  });
  const [play3] = useSound(clickSoundUrls[2], {
    volume: 1,
    interrupt: true,
    soundEnabled: !silentMode
  });
  const [play4] = useSound(clickSoundUrls[3], {
    volume: 1,
    interrupt: true,
    soundEnabled: !silentMode
  });

  const playClick = useCallback(() => {
    const playFns = [play1, play2, play3, play4];
    const idx = random.integer(0, playFns.length - 1);
    playFns[idx]();
  }, [play1, play2, play3, play4]);

  return { playClick };
};

export const useCorrect = () => {
  const silentMode = usePreferencesStore(state => state.silentMode);

  const successSoundUrl = '/sounds/correct.wav';

  const [play] = useSound(successSoundUrl, {
    volume: 0.7,
    interrupt: true,
    soundEnabled: !silentMode
  });

  return { playCorrect: play };
};

export const useError = () => {
  const silentMode = usePreferencesStore(state => state.silentMode);

  const errorSoundUrl = '/sounds/error/error1/error1_1.wav';

  const [play] = useSound(errorSoundUrl, {
    volume: 1,
    interrupt: true,
    soundEnabled: !silentMode
  });

  const playErrorTwice = useCallback(() => {
    play();
    setTimeout(() => play(), 90);
  }, [play]);

  return {
    playError: play,
    playErrorTwice
  };
};

export const useLong = () => {
  const silentMode = usePreferencesStore(state => state.silentMode);

  const longSoundUrl = '/sounds/long.wav';

  const [play] = useSound(longSoundUrl, {
    volume: 0.2,
    interrupt: true,
    soundEnabled: !silentMode
  });

  return { playLong: play };
};
