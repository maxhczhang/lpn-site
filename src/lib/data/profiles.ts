import type { Profile } from './types';
import profileData from './profiles.json';

export const profiles = profileData as Record<string, Profile>;
