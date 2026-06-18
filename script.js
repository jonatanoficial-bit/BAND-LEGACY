'use strict';

const BUILD_VERSION = 'v1.9.0_total_visual_asset_integration_20260617_1635';
const BUILD_NAME = 'Band Legacy - Total Visual Asset Integration';
const BUILD_PHASE = 'FASE 18 - integração visual total dos assets oficiais';
const BUILD_DATE = '2026-06-17 16:35 UTC';

const VALE_ASSETS = {
  backgrounds: {
    mainMenu: ['assets/backgrounds/BG_LIVE_SHOW_STADIUM_01.png','assets/backgrounds/main_menu/bg_main_menu_v001.png','assets/backgrounds/bg_main_menu_start_v001.png'],
    newCareer: ['assets/backgrounds/BG_LIVE_SHOW_THEATER_01.png','assets/backgrounds/bg_new_game_avatar_v001.png'],
    profileCareer: ['assets/backgrounds/BG_LIVE_SHOW_THEATER_01.png','assets/backgrounds/bg_new_game_avatar_v001.png'],
    lobby: ['assets/backgrounds/BG_LIVE_SHOW_FESTIVAL_DAY_01.png','assets/backgrounds/BG_LIVE_SHOW_FESTIVAL_DAY_01.png','assets/backgrounds/bg_lobby_dashboard_v001.png'],
    band: ['assets/backgrounds/BG_GARAGE_REHEARSAL_01.png','assets/backgrounds/bg_create_band_v001.png','assets/backgrounds/BG_GARAGE_REHEARSAL_01.png'],
    studio: ['assets/backgrounds/BG_STUDIO_RECORDING_ROOM_01.png','assets/backgrounds/BG_STUDIO_RECORDING_ROOM_01.png','assets/backgrounds/bg_studio_v001.png'],
    liveShow: ['assets/backgrounds/BG_LIVE_SHOW_STADIUM_01.png','assets/backgrounds/BG_LIVE_SHOW_STADIUM_01.png','assets/backgrounds/bg_live_show_v001.png'],
    socialMedia: ['assets/backgrounds/BG_PRESS_INTERVIEW_ROOM_01.png','assets/backgrounds/social/bg_social_v001.png'],
    economy: ['assets/backgrounds/BG_HOTEL_ROOM_TOUR_01.png','assets/backgrounds/economy/bg_economy_v001.png'],
    worldTour: ['assets/backgrounds/BG_WORLD_TOUR_MAP_ROOM_01.png','assets/backgrounds/BG_WORLD_TOUR_MAP_ROOM_01.png'],
    events: ['assets/backgrounds/BG_LIVE_SHOW_FESTIVAL_DAY_01.png','assets/backgrounds/events/bg_events_v001.png'],
    market: ['assets/backgrounds/BG_TOUR_BUS_INTERIOR_01.png','assets/backgrounds/market/bg_market_v001.png'],
    release: ['assets/backgrounds/BG_STUDIO_RECORDING_ROOM_01.png','assets/backgrounds/release/bg_release_v001.png'],
    staff: ['assets/backgrounds/BG_PRESS_INTERVIEW_ROOM_01.png','assets/backgrounds/staff/bg_staff_v001.png'],
    composition: ['assets/backgrounds/BG_GARAGE_REHEARSAL_01.png','assets/backgrounds/BG_GARAGE_REHEARSAL_01.png'],
    settings: ['assets/backgrounds/BG_HOTEL_ROOM_TOUR_01.png','assets/backgrounds/bg_lobby_summary_v001.png'],
    credits: ['assets/backgrounds/BG_LIVE_SHOW_THEATER_01.png','assets/backgrounds/bg_main_menu_features_v001.png'],
    releaseCandidate: ['assets/backgrounds/BG_LIVE_SHOW_STADIUM_01.png','assets/backgrounds/bg_main_menu_options_v001.png'],
    commercialQA: ['assets/backgrounds/BG_LIVE_SHOW_FESTIVAL_DAY_01.png','assets/backgrounds/bg_lobby_dashboard_v001.png'],
    assetPipeline: ['assets/backgrounds/BG_STUDIO_RECORDING_ROOM_01.png','assets/backgrounds/bg_main_menu_features_v001.png'],
    onboarding: ['assets/backgrounds/BG_LIVE_SHOW_THEATER_01.png','assets/backgrounds/bg_main_menu_start_v001.png'],
    localizationQA: ['assets/backgrounds/BG_PRESS_INTERVIEW_ROOM_01.png','assets/backgrounds/bg_lobby_summary_v001.png'],
    longCampaign: ['assets/backgrounds/BG_WORLD_TOUR_MAP_ROOM_01.png','assets/backgrounds/BG_LIVE_SHOW_FESTIVAL_DAY_01.png'],
    worldRanking: ['assets/backgrounds/BG_LIVE_SHOW_FESTIVAL_DAY_01.png','assets/backgrounds/BG_WORLD_TOUR_MAP_ROOM_01.png'],
    bandDynamics: ['assets/backgrounds/BG_BAND_CREATION_REHEARSAL_LOFT_01.png','assets/backgrounds/BG_GARAGE_REHEARSAL_01.png'],
    contracts: ['assets/backgrounds/BG_FINANCE_OFFICE_01.png','assets/backgrounds/BG_PRESS_INTERVIEW_ROOM_01.png']
  },

  players: [
    { id:'male_01', label:'M1', full:'assets/characters/player/CHR_PLAYER_MALE_01.png', face:'assets/characters/faces/FACE_PLAYER_MALE_01.png' },
    { id:'male_02', label:'M2', full:'assets/characters/player/CHR_PLAYER_MALE_02.png', face:'assets/characters/faces/FACE_PLAYER_MALE_02.png' },
    { id:'male_03', label:'M3', full:'assets/characters/player/CHR_PLAYER_MALE_03.png', face:'assets/characters/faces/FACE_PLAYER_MALE_03.png' },
    { id:'male_04', label:'M4', full:'assets/characters/player/CHR_PLAYER_MALE_04.png', face:'assets/characters/faces/FACE_PLAYER_MALE_04.png' },
    { id:'female_01', label:'F1', full:'assets/characters/player/CHR_PLAYER_FEMALE_01.png', face:'assets/characters/faces/FACE_PLAYER_FEMALE_01.png' },
    { id:'female_02', label:'F2', full:'assets/characters/player/CHR_PLAYER_FEMALE_02.png', face:'assets/characters/faces/FACE_PLAYER_FEMALE_02.png' },
    { id:'female_03', label:'F3', full:'assets/characters/player/CHR_PLAYER_FEMALE_03.png', face:'assets/characters/faces/FACE_PLAYER_FEMALE_03.png' },
    { id:'female_04', label:'F4', full:'assets/characters/player/CHR_PLAYER_FEMALE_04.png', face:'assets/characters/faces/FACE_PLAYER_FEMALE_04.png' },
    { id:'andro_01', label:'A1', full:'assets/characters/player/CHR_PLAYER_ANDRO_01.png', face:'assets/characters/faces/FACE_PLAYER_ANDRO_01.png' },
    { id:'andro_02', label:'A2', full:'assets/characters/player/CHR_PLAYER_ANDRO_02.png', face:'assets/characters/faces/FACE_PLAYER_ANDRO_02.png' },
    { id:'andro_03', label:'A3', full:'assets/characters/player/CHR_PLAYER_ANDRO_03.png', face:'assets/characters/faces/FACE_PLAYER_ANDRO_03.png' },
    { id:'andro_04', label:'A4', full:'assets/characters/player/CHR_PLAYER_ANDRO_04.png', face:'assets/characters/faces/FACE_PLAYER_ANDRO_04.png' }
  ],
  recruits: {
    vocalist_01: 'assets/characters/recruits/CHR_RECRUIT_VOCALIST_01.png',
    vocalist_02: 'assets/characters/recruits/CHR_RECRUIT_VOCALIST_02.png',
    guitarist_01: 'assets/characters/recruits/CHR_RECRUIT_GUITARIST_01.png',
    guitarist_02: 'assets/characters/recruits/CHR_RECRUIT_GUITARIST_02.png',
    bassist_01: 'assets/characters/recruits/CHR_RECRUIT_BASSIST_01.png',
    bassist_02: 'assets/characters/recruits/CHR_RECRUIT_BASSIST_02.png',
    drummer_01: 'assets/characters/recruits/CHR_RECRUIT_DRUMMER_01.png',
    drummer_02: 'assets/characters/recruits/CHR_RECRUIT_DRUMMER_02.png',
    drummer_gospel_male: 'assets/characters/recruits/extras/CHR_RECRUIT_DRUMMER_ROCK_01.png',
    drummer_gospel_female: 'assets/characters/recruits/extras/CHR_RECRUIT_DRUMMER_ROCK_FEMALE_01.png'
  },
  staff: {
    manager_01: 'assets/characters/staff/CHR_STAFF_MANAGER_01.png',
    producer_01: 'assets/characters/staff/CHR_STAFF_PRODUCER_01.png',
    sound_engineer_01: 'assets/characters/staff/CHR_STAFF_SOUND_ENGINEER_01.png',
    roadie_01: 'assets/characters/staff/CHR_STAFF_ROADIE_01.png',
    social_media_01: 'assets/characters/staff/CHR_STAFF_SOCIAL_MEDIA_01.png',
    security_01: 'assets/characters/staff/CHR_STAFF_SECURITY_01.png'
  },
  logos: {
    crown: 'assets/logos/bands/LOGO_BAND_CROWN_01.png',
    lightning: 'assets/logos/bands/LOGO_BAND_LIGHTNING_01.png',
    serpent: 'assets/logos/bands/LOGO_BAND_SERPENT_01.png',
    phoenix: 'assets/logos/bands/LOGO_BAND_PHOENIX_01.png',
    skull_optional: 'assets/logos/bands/optional_rock_only/LOGO_BAND_SKULL_WINGS_01.png',
    label: 'assets/logos/world/LOGO_LABEL_01.png',
    festival: 'assets/logos/world/LOGO_FESTIVAL_01.png'
  }
};

const REQUIRED_ASSETS = [
  ...Object.values(VALE_ASSETS.backgrounds).flat(),
  ...VALE_ASSETS.players.flatMap(p => [p.full, p.face]),
  ...Object.values(VALE_ASSETS.recruits),
  ...Object.values(VALE_ASSETS.staff),
  ...Object.values(VALE_ASSETS.logos)
].filter((value, index, list) => value && list.indexOf(value) === index);

const ASSET_PIPELINE_MANIFEST = [
  { group: 'Backgrounds', key: 'main_menu', path: 'assets/backgrounds/BG_LIVE_SHOW_STADIUM_01.png', finalName: 'BG_LIVE_SHOW_STADIUM_01.png', status: 'required-external-asset-folder', priority: 'P0' },
  { group: 'Backgrounds', key: 'lobby', path: 'assets/backgrounds/BG_LIVE_SHOW_FESTIVAL_DAY_01.png', finalName: 'BG_LIVE_SHOW_THEATER_01.png', status: 'required-external-asset-folder', priority: 'P0' },
  { group: 'Backgrounds', key: 'studio', path: 'assets/backgrounds/BG_STUDIO_RECORDING_ROOM_01.png', finalName: 'BG_STUDIO_RECORDING_ROOM_01.png', status: 'required-external-asset-folder', priority: 'P0' },
  { group: 'Backgrounds', key: 'band', path: 'assets/backgrounds/BG_GARAGE_REHEARSAL_01.png', finalName: 'BG_GARAGE_REHEARSAL_01.png', status: 'required-external-asset-folder', priority: 'P0' },
  { group: 'Backgrounds', key: 'world_tour', path: 'assets/backgrounds/BG_WORLD_TOUR_MAP_ROOM_01.png', finalName: 'BG_WORLD_TOUR_MAP_ROOM_01.png', status: 'required-external-asset-folder', priority: 'P0' },
  { group: 'Characters', key: 'player_male_01', path: 'assets/characters/player/CHR_PLAYER_MALE_01.png', finalName: 'CHR_PLAYER_MALE_01.png', status: 'required-external-asset-folder', priority: 'P0' },
  { group: 'Characters', key: 'face_male_01', path: 'assets/characters/faces/FACE_PLAYER_MALE_01.png', finalName: 'FACE_PLAYER_MALE_01.png', status: 'required-external-asset-folder', priority: 'P0' },
  { group: 'Characters', key: 'recruit_vocalist_01', path: 'assets/characters/recruits/CHR_RECRUIT_VOCALIST_01.png', finalName: 'CHR_RECRUIT_VOCALIST_01.png', status: 'required-external-asset-folder', priority: 'P0' },
  { group: 'Characters', key: 'staff_manager_01', path: 'assets/characters/staff/CHR_STAFF_MANAGER_01.png', finalName: 'CHR_STAFF_MANAGER_01.png', status: 'required-external-asset-folder', priority: 'P0' },
  { group: 'Logos', key: 'logo_crown', path: 'assets/logos/bands/LOGO_BAND_CROWN_01.png', finalName: 'LOGO_BAND_CROWN_01.png', status: 'required-external-asset-folder', priority: 'P0' },
  { group: 'Logos', key: 'logo_label', path: 'assets/logos/world/LOGO_LABEL_01.png', finalName: 'LOGO_LABEL_01.png', status: 'required-external-asset-folder', priority: 'P0' }
];
let assetPipelineLastScan = [];


const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function firstAsset(pathOrList) { return Array.isArray(pathOrList) ? pathOrList[0] : pathOrList; }
function assetUrl(pathOrList) { const path = firstAsset(pathOrList); return `url("${path}")`; }
function assetStyle(pathOrList, position = 'center top') { const path = firstAsset(pathOrList); return path ? `background-image:${assetUrl(path)};background-size:cover;background-position:${position};background-repeat:no-repeat;` : ''; }
const assetResolutionCache = new Map();
function canLoadImage(path) {
  return new Promise(resolve => {
    const img = new Image();
    const timer = setTimeout(() => resolve(false), 4500);
    img.onload = () => { clearTimeout(timer); resolve(true); };
    img.onerror = () => { clearTimeout(timer); resolve(false); };
    img.src = path + (path.includes('?') ? '&' : '?') + 'bl_asset_check=137';
  });
}
async function resolveAsset(pathOrList) {
  const candidates = (Array.isArray(pathOrList) ? pathOrList : [pathOrList]).filter(Boolean);
  const key = candidates.join('|');
  if (assetResolutionCache.has(key)) return assetResolutionCache.get(key);
  for (const path of candidates) {
    if (await canLoadImage(path)) { assetResolutionCache.set(key, path); return path; }
  }
  const fallback = candidates[0] || '';
  assetResolutionCache.set(key, fallback);
  return fallback;
}
async function applyResolvedBackground(el, pathOrList, position = 'center center', size = 'cover') {
  if (!el) return;
  const path = await resolveAsset(pathOrList);
  // CSS antigo usa !important em várias telas; por isso aplicamos também como !important.
  el.style.setProperty('background-image', `url("${path}")`, 'important');
  el.style.setProperty('background-size', size, 'important');
  el.style.setProperty('background-position', position, 'important');
  el.style.setProperty('background-repeat', 'no-repeat', 'important');
  el.style.setProperty('opacity', '1', 'important');
  el.dataset.assetResolved = path;
}
function playerAsset(id) { return VALE_ASSETS.players.find(p => p.id === id) || VALE_ASSETS.players[0]; }
function applySelectedAvatarVisual(save = ensureSave()) {
  const player = playerAsset(save?.player?.avatar || 'male_01');
  const mini = $('.profile-mini .avatar');
  if (mini) mini.style.cssText += assetStyle(player.face, 'center center');
  const preview = $('#avatarPreview');
  if (preview) preview.style.cssText += assetStyle(player.full, 'center top');
}
function initAvatarChoices() {
  const choices = $('#avatarChoices');
  if (!choices || choices.dataset.ready === 'true') return;
  choices.dataset.ready = 'true';
  choices.innerHTML = '';
  VALE_ASSETS.players.forEach(p => {
    const btn = document.createElement('button');
    btn.className = 'avatar-choice-button';
    btn.dataset.avatar = p.id;
    btn.title = p.full;
    btn.style.cssText += assetStyle(p.face, 'center center');
    btn.innerHTML = `<span>${p.label}</span>`;
    choices.appendChild(btn);
  });
}
function memberImage(member, index = 0) {
  const role = String(member?.role || '').toLowerCase();
  if (role.includes('vocal')) return index % 2 ? VALE_ASSETS.recruits.vocalist_02 : VALE_ASSETS.recruits.vocalist_01;
  if (role.includes('guit')) return index % 2 ? VALE_ASSETS.recruits.guitarist_02 : VALE_ASSETS.recruits.guitarist_01;
  if (role.includes('baix') || role.includes('bass')) return index % 2 ? VALE_ASSETS.recruits.bassist_02 : VALE_ASSETS.recruits.bassist_01;
  if (role.includes('bat') || role.includes('drum')) return index % 2 ? VALE_ASSETS.recruits.drummer_02 : VALE_ASSETS.recruits.drummer_01;
  return VALE_ASSETS.recruits.vocalist_01;
}
function staffImage(person) {
  const id = String(person?.id || '').toLowerCase();
  const role = String(person?.role || '').toLowerCase();
  if (id.includes('manager') || role.includes('empres')) return VALE_ASSETS.staff.manager_01;
  if (id.includes('producer') || role.includes('produtor')) return VALE_ASSETS.staff.producer_01;
  if (id.includes('road') || role.includes('tour')) return VALE_ASSETS.staff.roadie_01;
  if (id.includes('press') || role.includes('marketing') || role.includes('pr')) return VALE_ASSETS.staff.social_media_01;
  if (id.includes('scout') || role.includes('caça')) return VALE_ASSETS.staff.sound_engineer_01;
  if (id.includes('coach') || role.includes('palco')) return VALE_ASSETS.staff.security_01;
  return VALE_ASSETS.staff.manager_01;
}

function officialBackgroundCandidates(screenId) {
  const official = {
    mainMenu: ['assets/backgrounds/BG_MAINMENU_STAGE_ARENA_01.png','assets/backgrounds/BG_LIVE_SHOW_STADIUM_01.png','assets/backgrounds/main_menu/bg_main_menu_v001.png'],
    newCareer: ['assets/backgrounds/BG_CHARACTER_CREATION_DRESSINGROOM_01.png','assets/backgrounds/BG_CHARACTER_CREATION_STUDIO_01.png','assets/backgrounds/BG_LIVE_SHOW_THEATER_01.png'],
    profileCareer: ['assets/backgrounds/BG_CHARACTER_CREATION_STUDIO_01.png','assets/backgrounds/BG_CHARACTER_CREATION_DRESSINGROOM_01.png','assets/backgrounds/BG_LIVE_SHOW_THEATER_01.png'],
    lobby: ['assets/backgrounds/BG_LOBBY_BACKSTAGE_HUB_01.png','assets/backgrounds/BG_LIVE_SHOW_FESTIVAL_DAY_01.png','assets/backgrounds/BG_BAND_CREATION_BACKSTAGE_01.png'],
    band: ['assets/backgrounds/BG_BAND_CREATION_REHEARSAL_LOFT_01.png','assets/backgrounds/BG_BAND_CREATION_BACKSTAGE_01.png','assets/backgrounds/BG_GARAGE_REHEARSAL_01.png'],
    composition: ['assets/backgrounds/BG_GARAGE_REHEARSAL_01.png','assets/backgrounds/BG_BAND_CREATION_REHEARSAL_LOFT_01.png'],
    studio: ['assets/backgrounds/BG_STUDIO_CONTROLROOM_01.png','assets/backgrounds/BG_STUDIO_RECORDING_ROOM_01.png','assets/backgrounds/BG_STUDIO_MASTERING_SUITE_01.png'],
    release: ['assets/backgrounds/BG_STUDIO_MASTERING_SUITE_01.png','assets/backgrounds/BG_STUDIO_CONTROLROOM_01.png','assets/backgrounds/BG_STUDIO_RECORDING_ROOM_01.png'],
    liveShow: ['assets/backgrounds/BG_LIVE_SHOW_STADIUM_01.png','assets/backgrounds/BG_LIVE_SHOW_ARENA_01.png','assets/backgrounds/BG_LIVE_SHOW_FESTIVAL_NIGHT_01.png'],
    socialMedia: ['assets/backgrounds/BG_SOCIAL_MEDIA_ROOM_01.png','assets/backgrounds/BG_PRESS_INTERVIEW_ROOM_01.png'],
    staff: ['assets/backgrounds/BG_PRESS_INTERVIEW_ROOM_01.png','assets/backgrounds/BG_SOCIAL_MEDIA_ROOM_01.png'],
    worldTour: ['assets/backgrounds/BG_WORLD_TOUR_MAP_ROOM_01.png','assets/backgrounds/BG_TOUR_BUS_INTERIOR_01.png'],
    events: ['assets/backgrounds/BG_LIVE_SHOW_FESTIVAL_NIGHT_01.png','assets/backgrounds/BG_LIVE_SHOW_FESTIVAL_DAY_01.png','assets/backgrounds/BG_PRESS_INTERVIEW_ROOM_01.png'],
    market: ['assets/backgrounds/BG_TOUR_BUS_INTERIOR_01.png','assets/backgrounds/BG_WORLD_TOUR_MAP_ROOM_01.png'],
    economy: ['assets/backgrounds/BG_FINANCE_OFFICE_01.png','assets/backgrounds/BG_HOTEL_ROOM_TOUR_01.png'],
    settings: ['assets/backgrounds/BG_HOTEL_ROOM_TOUR_01.png','assets/backgrounds/BG_LOBBY_BACKSTAGE_HUB_01.png'],
    credits: ['assets/backgrounds/BG_LIVE_SHOW_THEATER_01.png','assets/backgrounds/BG_MAINMENU_STAGE_ARENA_01.png'],
    releaseCandidate: ['assets/backgrounds/BG_LIVE_SHOW_ARENA_01.png','assets/backgrounds/BG_LIVE_SHOW_STADIUM_01.png'],
    commercialQA: ['assets/backgrounds/BG_WORLD_TOUR_MAP_ROOM_01.png','assets/backgrounds/BG_LIVE_SHOW_FESTIVAL_DAY_01.png'],
    assetPipeline: ['assets/backgrounds/BG_STUDIO_CONTROLROOM_01.png','assets/backgrounds/BG_STUDIO_RECORDING_ROOM_01.png'],
    onboarding: ['assets/backgrounds/BG_CHARACTER_CREATION_DRESSINGROOM_01.png','assets/backgrounds/BG_LIVE_SHOW_THEATER_01.png'],
    localizationQA: ['assets/backgrounds/BG_PRESS_INTERVIEW_ROOM_01.png','assets/backgrounds/BG_SOCIAL_MEDIA_ROOM_01.png'],
    longCampaign: ['assets/backgrounds/BG_WORLD_TOUR_MAP_ROOM_01.png','assets/backgrounds/BG_TOUR_BUS_INTERIOR_01.png'],
    worldRanking: ['assets/backgrounds/BG_LIVE_SHOW_FESTIVAL_DAY_01.png','assets/backgrounds/BG_LIVE_SHOW_ARENA_01.png','assets/backgrounds/BG_WORLD_TOUR_MAP_ROOM_01.png'],
    bandDynamics: ['assets/backgrounds/BG_BAND_CREATION_REHEARSAL_LOFT_01.png','assets/backgrounds/BG_GARAGE_REHEARSAL_01.png'],
    contracts: ['assets/backgrounds/BG_FINANCE_OFFICE_01.png','assets/backgrounds/BG_PRESS_INTERVIEW_ROOM_01.png']
  };
  return official[screenId] || VALE_ASSETS.backgrounds[screenId] || official.mainMenu;
}

function setVisualBackground(el, candidates, position = 'center center', size = 'cover', overlay = 'linear-gradient(180deg,rgba(0,0,0,.14),rgba(0,0,0,.66))') {
  if (!el) return;
  resolveAsset(candidates).then(path => {
    const image = overlay ? `${overlay},url("${path}")` : `url("${path}")`;
    el.style.setProperty('background-image', image, 'important');
    el.style.setProperty('background-size', size, 'important');
    el.style.setProperty('background-position', position, 'important');
    el.style.setProperty('background-repeat', 'no-repeat', 'important');
    el.style.setProperty('opacity', '1', 'important');
    el.dataset.assetResolved = path;
    el.classList.add('asset-bound');
  }).catch(err => reportIssue('VISUAL_ASSET_BIND_FAIL', err));
}

function bindCardBackgrounds() {
  const tilePaths = [
    ['assets/backgrounds/BG_BAND_CREATION_REHEARSAL_LOFT_01.png','assets/backgrounds/BG_GARAGE_REHEARSAL_01.png'],
    ['assets/backgrounds/BG_STUDIO_CONTROLROOM_01.png','assets/backgrounds/BG_STUDIO_RECORDING_ROOM_01.png'],
    ['assets/backgrounds/BG_STUDIO_MASTERING_SUITE_01.png','assets/backgrounds/BG_STUDIO_RECORDING_ROOM_01.png'],
    ['assets/backgrounds/BG_LIVE_SHOW_BAR_01.png','assets/backgrounds/BG_LIVE_SHOW_CLUB_01.png'],
    ['assets/backgrounds/BG_LIVE_SHOW_STADIUM_01.png','assets/backgrounds/BG_LIVE_SHOW_ARENA_01.png'],
    ['assets/backgrounds/BG_SOCIAL_MEDIA_ROOM_01.png','assets/backgrounds/BG_PRESS_INTERVIEW_ROOM_01.png'],
    ['assets/backgrounds/BG_LIVE_SHOW_FESTIVAL_DAY_01.png','assets/backgrounds/BG_LIVE_SHOW_FESTIVAL_NIGHT_01.png'],
    ['assets/backgrounds/BG_WORLD_TOUR_MAP_ROOM_01.png'],
    ['assets/backgrounds/BG_TOUR_BUS_INTERIOR_01.png'],
    ['assets/backgrounds/BG_FINANCE_OFFICE_01.png','assets/backgrounds/BG_HOTEL_ROOM_TOUR_01.png']
  ];
  document.querySelectorAll('.tile').forEach((tile, index) => {
    setVisualBackground(tile, tilePaths[index % tilePaths.length], 'center center', 'cover', 'linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.84))');
  });
  setVisualBackground(document.querySelector('.feature-banner'), ['assets/backgrounds/BG_LOBBY_BACKSTAGE_HUB_01.png','assets/backgrounds/BG_LIVE_SHOW_FESTIVAL_DAY_01.png'], 'center center', 'cover', 'linear-gradient(90deg,rgba(0,0,0,.62),rgba(0,0,0,.18))');
  document.querySelectorAll('.show-stage').forEach(stage => {
    setVisualBackground(stage, ['assets/backgrounds/BG_LIVE_SHOW_STADIUM_01.png','assets/backgrounds/BG_LIVE_SHOW_ARENA_01.png'], 'center center', 'cover', 'linear-gradient(180deg,rgba(255,220,140,.05),rgba(0,0,0,.42))');
  });
}

function bindAvatarAndCharacterSurfaces() {
  const save = ensureSave();
  const player = playerAsset(save?.player?.avatar || 'male_01');
  const mini = $('.profile-mini .avatar');
  if (mini) setVisualBackground(mini, [player.face, player.full], 'center top', 'cover', '');
  const preview = $('#avatarPreview');
  if (preview) setVisualBackground(preview, [player.full, player.face], 'center top', 'cover', 'radial-gradient(circle at 50% 18%,rgba(255,224,145,.15),transparent 36%)');
  document.querySelectorAll('.avatar-choice-button').forEach(btn => {
    const p = playerAsset(btn.dataset.avatar || 'male_01');
    setVisualBackground(btn, [p.face, p.full], 'center top', 'cover', 'linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.38))');
  });
  document.querySelectorAll('.member-photo,.staff-avatar').forEach(el => {
    el.style.setProperty('background-size', 'cover', 'important');
    el.style.setProperty('background-position', 'center top', 'important');
    el.style.setProperty('background-repeat', 'no-repeat', 'important');
  });
}

function forceOfficialAssetBindings(screenId) {
  const bg = document.getElementById('cinemaBg');
  setVisualBackground(bg, officialBackgroundCandidates(screenId), 'center center', 'cover', 'linear-gradient(90deg,rgba(0,0,0,.58),rgba(0,0,0,.16),rgba(0,0,0,.66)),linear-gradient(0deg,rgba(0,0,0,.55),transparent 45%,rgba(0,0,0,.28))');
  bindCardBackgrounds();
  bindAvatarAndCharacterSurfaces();
  initBandLogoUI();
  applyBandLogoVisual(ensureSave());
  document.body.classList.add('phase18-visual-assets');
}


function setRootBackground(screenId) {
  const bg = $('#cinemaBg');
  if (!bg) return;
  applyResolvedBackground(bg, officialBackgroundCandidates(screenId), 'center center', 'cover');
}

function bandLogoPath(key) {
  return VALE_ASSETS.logos[key] || VALE_ASSETS.logos.crown;
}
function applyBandLogoVisual(save = ensureSave()) {
  const key = save?.band?.logo || 'crown';
  const path = bandLogoPath(key);
  document.querySelectorAll('[data-band-logo-display]').forEach(el => {
    el.style.setProperty('background-image', assetUrl(path), 'important');
    el.style.setProperty('background-size', 'contain', 'important');
    el.style.setProperty('background-position', 'center', 'important');
    el.style.setProperty('background-repeat', 'no-repeat', 'important');
    el.style.setProperty('display', 'block', 'important');
  });
  document.querySelectorAll('[data-logo-choice]').forEach(btn => btn.classList.toggle('selected', btn.dataset.logoChoice === key));
}
function initBandLogoUI() {
  const brand = document.querySelector('.brand-mini');
  if (brand && !brand.querySelector('[data-band-logo-display]')) {
    const mark = document.createElement('span');
    mark.className = 'band-logo-mini';
    mark.dataset.bandLogoDisplay = 'true';
    brand.prepend(mark);
  }
  const identityCard = document.querySelector('#newCareer .card:nth-child(3)');
  if (identityCard && !identityCard.querySelector('.band-logo-picker')) {
    const wrap = document.createElement('div');
    wrap.className = 'band-logo-picker';
    wrap.innerHTML = '<label>Logo da banda</label><div class="band-logo-main" data-band-logo-display="true"></div><div class="band-logo-options"></div>';
    const opts = wrap.querySelector('.band-logo-options');
    ['crown','lightning','serpent','phoenix','skull_optional'].forEach(key => {
      const b=document.createElement('button'); b.type='button'; b.dataset.logoChoice=key; b.title=key;
      b.style.backgroundImage=assetUrl(bandLogoPath(key)); b.style.backgroundSize='contain'; b.style.backgroundPosition='center'; b.style.backgroundRepeat='no-repeat';
      opts.appendChild(b);
    });
    identityCard.appendChild(wrap);
  }
}

// Hotfix v1.3.1: garante que roda do mouse/trackpad e toque rolem a tela ativa.
document.addEventListener('wheel', (event) => {
  const activeScreen = document.querySelector('.screen.active');
  if (!activeScreen) return;
  const insideScrollable = event.target.closest('.screen.active, .panel, .dashboard, .right-feed, .side-nav, .asset-pipeline-list, .onboarding-mission-list, .save-slot-list, pre');
  if (insideScrollable && activeScreen.scrollHeight > activeScreen.clientHeight) {
    activeScreen.scrollTop += event.deltaY;
  }
}, { passive: true });
const clamp = (n, min = 0, max = 100) => Math.max(min, Math.min(max, Number(n) || 0));

let diagnostics = [];
let selectedMemberIndex = 0;

let audioEnabled = true;
let audioCtx = null;
let releaseLoadingDone = false;

const BALANCE = {
  weeklyBaseXp: 220,
  fanGrowthMultiplier: 1.12,
  earlyGameCashFloor: 850,
  tutorialRewardCash: 1200,
  tutorialRewardFans: 180
};

function getUiSetting(key, fallback) {
  return SafeStore.get(`bandLegacy:setting:${key}`, fallback);
}
function setUiSetting(key, value) {
  SafeStore.set(`bandLegacy:setting:${key}`, value);
}
function unlockAudio() {
  if (!audioEnabled) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
  } catch (err) { audioEnabled = false; reportIssue('AUDIO_CONTEXT_BLOCKED', err); }
}
function playUiTone(type = 'tap') {
  if (!audioEnabled || getUiSetting('audio', 'on') === 'off') return;
  try {
    unlockAudio();
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const now = audioCtx.currentTime;
    const freq = type === 'success' ? 740 : type === 'error' ? 160 : type === 'nav' ? 420 : 520;
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(type === 'error' ? 0.045 : 0.03, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + (type === 'success' ? 0.18 : 0.09));
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(now); osc.stop(now + 0.22);
  } catch (err) { reportIssue('UI_AUDIO_FAILED', err); }
}
function updateReleasePolishPanel() {
  const save = ensureSave();
  const checks = [
    ['Visual AAA', true],
    ['Mobile horizontal', true],
    ['Save System', !!save.meta],
    ['Core Loop', !!save.core],
    ['Estúdio e lançamentos', !!save.studio && !!save.release],
    ['Shows e turnês', !!save.liveShow && !!save.tour],
    ['PT / EN / ES', SUPPORTED_LANGUAGES.length === 3],
    ['Localização completa v1.3', typeof renderLocalizationQA === 'function' && LOCALIZATION_CATALOG_STATS.totalStrings > 200],
    ['Versão visível', !!$('#buildBadge')?.textContent]
  ];
  const list = $('#releaseChecklist');
  if (list) list.innerHTML = checks.map(([label, ok]) => `<div class="check-item ${ok ? 'ok' : 'warn'}"><b>${ok ? '✓' : '!'}</b><span>${label}</span></div>`).join('');
  const score = Math.round(checks.filter(x => x[1]).length / checks.length * 100);
  const badge = $('#releaseScore');
  if (badge) badge.textContent = `${score}%`;
}
function showReleaseLoading() {
  const loader = $('#releaseLoader');
  if (!loader || releaseLoadingDone) return;
  releaseLoadingDone = true;
  loader.classList.add('show');
  setTimeout(() => loader.classList.add('ready'), 450);
  setTimeout(() => loader.classList.remove('show'), 1150);
}
function showTutorial(force = false) {
  const overlay = $('#tutorialOverlay');
  if (!overlay) return;
  const seen = SafeStore.get('bandLegacy:tutorialSeen', 'no') === 'yes';
  if (!force && seen) return;
  overlay.classList.add('show');
  overlay.setAttribute('aria-hidden', 'false');
}
function completeTutorial() {
  const overlay = $('#tutorialOverlay');
  SafeStore.set('bandLegacy:tutorialSeen', 'yes');
  if (overlay) { overlay.classList.remove('show'); overlay.setAttribute('aria-hidden', 'true'); }
  const save = ensureSave();
  if (!save.meta?.tutorialRewardClaimed) {
    save.band.cash = Math.round((save.band.cash || 0) + BALANCE.tutorialRewardCash);
    save.band.fans = Math.round((save.band.fans || 0) + BALANCE.tutorialRewardFans);
    save.meta = { ...(save.meta || {}), tutorialRewardClaimed: true };
    saveGame(save);
    syncProfileToUI(save);
    renderCoreGameplay();
  }
  playUiTone('success');
}
function setAudioPreference(value) {
  setUiSetting('audio', value);
  audioEnabled = value !== 'off';
  const toggle = $('#audioToggle');
  if (toggle) toggle.value = value;
  playUiTone(value === 'off' ? 'error' : 'success');
}
function exportSaveBackup() {
  const save = ensureSave();
  const blob = new Blob([JSON.stringify(save, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `BandLegacy_Save_${BUILD_VERSION}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 500);
  playUiTone('success');
}

const SafeStore = {
  get(key, fallback = null) { try { return localStorage.getItem(key) ?? fallback; } catch (err) { reportIssue('LOCAL_STORAGE_GET', err); return fallback; } },
  set(key, value) { try { localStorage.setItem(key, value); return true; } catch (err) { reportIssue('LOCAL_STORAGE_SET', err); return false; } },
  remove(key) { try { localStorage.removeItem(key); return true; } catch (err) { reportIssue('LOCAL_STORAGE_REMOVE', err); return false; } },
  json(key, fallback) { try { return JSON.parse(this.get(key, '') || JSON.stringify(fallback)); } catch (err) { reportIssue('SAVE_PARSE_RECOVERED', err); return fallback; } }
};


const LANG_KEY = 'bandLegacy:language';
const SUPPORTED_LANGUAGES = ['pt-BR', 'en-US', 'es-ES'];
let currentLanguage = 'pt-BR';

const I18N = {
  'pt-BR': {
    locale: 'pt-BR',
    map: {}
  },
  'en-US': {
    locale: 'en-US',
    map: {
      'Idioma': 'Language',
      'Vire o celular': 'Rotate your phone',
      'Band Legacy foi criado para jogar em tela cheia horizontal. Vire o aparelho, toque em ativar e mantenha o celular deitado.': 'Band Legacy is designed for fullscreen landscape play. Rotate the device, tap activate, and keep the phone sideways.',
      'Ativar tela cheia horizontal': 'Activate landscape fullscreen',
      'Aguardando permissão do navegador...': 'Waiting for browser permission...',
      'Fundador / Vocalista': 'Founder / Vocalist',
      'New Game': 'New Game',
      'Continue': 'Continue',
      'Load Game': 'Load Game',
      'Settings': 'Settings',
      'Credits': 'Credits',
      'Sistema real de saves: até 5 slots, autosave, save manual, migração de versão e reset seguro.': 'Real save system: up to 5 slots, autosave, manual save, version migration, and safe reset.',
      'Save System': 'Save System',
      'Voltar': 'Back',
      'Salvar Agora': 'Save Now',
      'Continuar Último Save': 'Continue Latest Save',
      'Perfil e Carreira': 'Profile and Career',
      'Fase 4: identidade integrada ao ciclo principal de carreira, com autosave, slots, migração e reset seguro.': 'Phase 4: identity integrated into the main career loop, with autosave, slots, migration, and safe reset.',
      'Avatar do Artista': 'Artist Avatar',
      'Identidade': 'Identity',
      'Nome artístico': 'Stage name',
      'País': 'Country',
      'Cidade de origem': 'Hometown',
      'Dificuldade': 'Difficulty',
      'Normal': 'Normal',
      'Realista': 'Realistic',
      'Lenda': 'Legend',
      'Progresso': 'Progress',
      'Nível 1': 'Level 1',
      'Reputação Local': 'Local Reputation',
      'Carismático': 'Charismatic',
      'Criativo': 'Creative',
      'Disciplinado': 'Disciplined',
      'Rebelde': 'Rebel',
      'Criar/Editar Banda': 'Create/Edit Band',
      'Salvar Perfil': 'Save Profile',
      'Escolha seu avatar': 'Choose your avatar',
      'Sua identidade': 'Your identity',
      'Modo inicial': 'Starting mode',
      'Criar nova banda': 'Create new band',
      'Entrar em uma banda': 'Join a band',
      'Identidade da banda': 'Band identity',
      'Nome da banda': 'Band name',
      'Estilo musical': 'Music style',
      'Continuar': 'Continue',
      'Lobby': 'Lobby',
      'Perfil': 'Profile',
      'Banda': 'Band',
      'Compor': 'Compose',
      'Estúdio': 'Studio',
      'Lançar': 'Release',
      'Shows': 'Shows',
      'Social': 'Social',
      'Eventos': 'Events',
      'Mercado IA': 'AI Market',
      'Finanças': 'Finance',
      'Turnês': 'Tours',
      'Ranking': 'Ranking',
      'Próxima ação recomendada': 'Recommended next action',
      'Contratar staff essencial': 'Hire essential staff',
      'Siga o ciclo principal para evoluir a banda.': 'Follow the main loop to evolve the band.',
      'Ir para ação': 'Go to action',
      'Avançar semana': 'Advance week',
      'Crie novas músicas': 'Create new songs',
      'Gravar Estúdio': 'Record Studio',
      'Produza suas músicas': 'Produce your songs',
      'Lançar Música': 'Release Music',
      'Singles, EPs, charts e hype': 'Singles, EPs, charts, and hype',
      'Agende shows e turnês': 'Book shows and tours',
      'Social Media': 'Social Media',
      'Hype, fãs, viralização e reputação': 'Hype, fans, virality, and reputation',
      'Patrocínio': 'Sponsorship',
      'Gravadoras, sponsors e caixa': 'Labels, sponsors, and cashflow',
      'Turnês Mundiais': 'World Tours',
      'Rotas, logística e fãs globais': 'Routes, logistics, and global fans',
      'Eventos Dinâmicos': 'Dynamic Events',
      'Conflitos, imprensa, prêmios e decisões': 'Conflicts, press, awards, and decisions',
      'Tendências, rivais, charts e regiões': 'Trends, rivals, charts, and regions',
      'Contrate equipe': 'Hire crew',
      'Ciclo da Carreira': 'Career Loop',
      'Agenda': 'Schedule',
      'E-mails': 'Emails',
      'Fullscreen horizontal, orientação mobile, escala do HUD, áudio, idioma e performance foram organizados para a versão internacional.': 'Landscape fullscreen, mobile orientation, HUD scale, audio, language, and performance are organized for the international version.',
      'Escolha português do Brasil, inglês ou espanhol. A escolha fica salva no navegador.': 'Choose Brazilian Portuguese, English, or Spanish. Your choice is saved in the browser.',
      'Dispositivo Anti-Quebra': 'Anti-Break Device',
      'Rotas seguras, recuperação de save, verificação de assets, fallback de tela e log local.': 'Safe routing, save recovery, asset verification, screen fallback, and local log.',
      'Inicializando diagnóstico...': 'Initializing diagnostics...',
      'Forçar tela cheia': 'Force fullscreen',
      'Modo mobile horizontal': 'Mobile landscape mode',
      'Resetar save local': 'Reset local save',
      'Autosave pronto': 'Autosave ready',
      'Nenhum erro detectado. Sistema estavel.': 'No errors detected. System stable.',
      'Salvo': 'Saved',
      'Autosave': 'Autosave',
      'Novo jogo': 'New game',
      'sem data': 'no date',
      'Semana': 'Week',
      'GERENCIAR': 'MANAGE',
      'PRODUZIR': 'PRODUCE',
      'PROMOVER': 'PROMOTE',
      'PERFORMAR': 'PERFORM',
      'EVOLUIR': 'EVOLVE',
      'Prontidão': 'Readiness',
      'Reputação:': 'Reputation:',
      'fãs': 'fans'
    }
  },
  'es-ES': {
    locale: 'es-ES',
    map: {
      'Idioma': 'Idioma',
      'Vire o celular': 'Gira el móvil',
      'Band Legacy foi criado para jogar em tela cheia horizontal. Vire o aparelho, toque em ativar e mantenha o celular deitado.': 'Band Legacy fue diseñado para jugar en pantalla completa horizontal. Gira el dispositivo, toca activar y mantén el móvil en horizontal.',
      'Ativar tela cheia horizontal': 'Activar pantalla completa horizontal',
      'Aguardando permissão do navegador...': 'Esperando permiso del navegador...',
      'Fundador / Vocalista': 'Fundador / Vocalista',
      'New Game': 'Nueva partida',
      'Continue': 'Continuar',
      'Load Game': 'Cargar partida',
      'Settings': 'Ajustes',
      'Credits': 'Créditos',
      'Sistema real de saves: até 5 slots, autosave, save manual, migração de versão e reset seguro.': 'Sistema real de guardado: hasta 5 ranuras, autoguardado, guardado manual, migración de versión y reinicio seguro.',
      'Save System': 'Sistema de guardado',
      'Voltar': 'Volver',
      'Salvar Agora': 'Guardar ahora',
      'Continuar Último Save': 'Continuar último guardado',
      'Perfil e Carreira': 'Perfil y carrera',
      'Fase 4: identidade integrada ao ciclo principal de carreira, com autosave, slots, migração e reset seguro.': 'Fase 4: identidad integrada al ciclo principal de carrera, con autoguardado, ranuras, migración y reinicio seguro.',
      'Avatar do Artista': 'Avatar del artista',
      'Identidade': 'Identidad',
      'Nome artístico': 'Nombre artístico',
      'País': 'País',
      'Cidade de origem': 'Ciudad de origen',
      'Dificuldade': 'Dificultad',
      'Normal': 'Normal',
      'Realista': 'Realista',
      'Lenda': 'Leyenda',
      'Progresso': 'Progreso',
      'Nível 1': 'Nivel 1',
      'Reputação Local': 'Reputación local',
      'Carismático': 'Carismático',
      'Criativo': 'Creativo',
      'Disciplinado': 'Disciplinado',
      'Rebelde': 'Rebelde',
      'Criar/Editar Banda': 'Crear/editar banda',
      'Salvar Perfil': 'Guardar perfil',
      'Escolha seu avatar': 'Elige tu avatar',
      'Sua identidade': 'Tu identidad',
      'Modo inicial': 'Modo inicial',
      'Criar nova banda': 'Crear nueva banda',
      'Entrar em uma banda': 'Entrar en una banda',
      'Identidade da banda': 'Identidad de la banda',
      'Nome da banda': 'Nombre de la banda',
      'Estilo musical': 'Estilo musical',
      'Continuar': 'Continuar',
      'Lobby': 'Lobby',
      'Perfil': 'Perfil',
      'Banda': 'Banda',
      'Compor': 'Componer',
      'Estúdio': 'Estudio',
      'Lançar': 'Lanzar',
      'Shows': 'Conciertos',
      'Social': 'Social',
      'Eventos': 'Eventos',
      'Mercado IA': 'Mercado IA',
      'Finanças': 'Finanzas',
      'Turnês': 'Giras',
      'Ranking': 'Ranking',
      'Próxima ação recomendada': 'Próxima acción recomendada',
      'Contratar staff essencial': 'Contratar equipo esencial',
      'Siga o ciclo principal para evoluir a banda.': 'Sigue el ciclo principal para evolucionar la banda.',
      'Ir para ação': 'Ir a la acción',
      'Avançar semana': 'Avanzar semana',
      'Crie novas músicas': 'Crea nuevas canciones',
      'Gravar Estúdio': 'Grabar estudio',
      'Produza suas músicas': 'Produce tus canciones',
      'Lançar Música': 'Lanzar música',
      'Singles, EPs, charts e hype': 'Singles, EPs, listas y hype',
      'Agende shows e turnês': 'Programa conciertos y giras',
      'Social Media': 'Redes sociales',
      'Hype, fãs, viralização e reputação': 'Hype, fans, viralización y reputación',
      'Patrocínio': 'Patrocinio',
      'Gravadoras, sponsors e caixa': 'Sellos, sponsors y caja',
      'Turnês Mundiais': 'Giras mundiales',
      'Rotas, logística e fãs globais': 'Rutas, logística y fans globales',
      'Eventos Dinâmicos': 'Eventos dinámicos',
      'Conflitos, imprensa, prêmios e decisões': 'Conflictos, prensa, premios y decisiones',
      'Tendências, rivais, charts e regiões': 'Tendencias, rivales, listas y regiones',
      'Contrate equipe': 'Contrata equipo',
      'Ciclo da Carreira': 'Ciclo de carrera',
      'Agenda': 'Agenda',
      'E-mails': 'Emails',
      'Fullscreen horizontal, orientação mobile, escala do HUD, áudio, idioma e performance foram organizados para a versão internacional.': 'Pantalla completa horizontal, orientación móvil, escala del HUD, audio, idioma y rendimiento están organizados para la versión internacional.',
      'Escolha português do Brasil, inglês ou espanhol. A escolha fica salva no navegador.': 'Elige portugués de Brasil, inglés o español. Tu elección queda guardada en el navegador.',
      'Dispositivo Anti-Quebra': 'Dispositivo anti-rotura',
      'Rotas seguras, recuperação de save, verificação de assets, fallback de tela e log local.': 'Rutas seguras, recuperación de guardado, verificación de assets, fallback de pantalla y registro local.',
      'Inicializando diagnóstico...': 'Inicializando diagnóstico...',
      'Forçar tela cheia': 'Forzar pantalla completa',
      'Modo mobile horizontal': 'Modo móvil horizontal',
      'Resetar save local': 'Reiniciar guardado local',
      'Autosave pronto': 'Autoguardado listo',
      'Nenhum erro detectado. Sistema estavel.': 'No se detectaron errores. Sistema estable.',
      'Salvo': 'Guardado',
      'Autosave': 'Autoguardado',
      'Novo jogo': 'Nueva partida',
      'sem data': 'sin fecha',
      'Semana': 'Semana',
      'GERENCIAR': 'GESTIONAR',
      'PRODUZIR': 'PRODUCIR',
      'PROMOVER': 'PROMOCIONAR',
      'PERFORMAR': 'ACTUAR',
      'EVOLUIR': 'EVOLUCIONAR',
      'Prontidão': 'Preparación',
      'Reputação:': 'Reputación:',
      'fãs': 'fans'
    }
  }
};


const PHASE12_LOCALIZATION = {"en-US": {"Idioma": "Language", "Idioma / Language / Idioma": "Language / Idioma / Idioma", "Localização": "Localization", "Localização Internacional": "International Localization", "Cobertura": "Coverage", "Pacote de idiomas": "Language pack", "Auditoria editorial": "Editorial audit", "Regras internacionais": "International rules", "Exportar pacote de idiomas": "Export language pack", "Voltar ao Menu": "Back to Menu", "Fase 12: revisão editorial PT-BR, EN e ES, catálogo de strings, textos dinâmicos, feedbacks de sistema e preparo para venda internacional.": "Phase 12: PT-BR, EN and ES editorial review, string catalog, dynamic text, system feedback, and preparation for international sale.", "Todos os textos principais foram catalogados em português do Brasil, inglês e espanhol. Termos de marca, nomes próprios e estilos musicais ficam preservados.": "All main texts have been cataloged in Brazilian Portuguese, English and Spanish. Brand terms, proper names and music styles are preserved.", "Aguardando auditoria --": "Waiting for audit --", "Sem texto fixo novo": "No new hardcoded text", "Novas telas devem usar catálogo ou data-i18n.": "New screens must use the catalog or data-i18n.", "Moeda e números localizados": "Localized currency and numbers", "HUD e relatórios usam locale do idioma atual.": "HUD and reports use the current language locale.", "Fallback seguro": "Safe fallback", "Se faltar tradução, o jogo mantém PT-BR e registra pendência.": "If a translation is missing, the game keeps PT-BR and records a pending item.", "Exportável": "Exportable", "O pacote de localização pode ser exportado em JSON para revisão externa.": "The localization pack can be exported as JSON for external review.", "Vire o celular": "Rotate your phone", "Band Legacy foi criado para jogar em tela cheia horizontal. Vire o aparelho, toque em ativar e mantenha o celular deitado.": "Band Legacy was designed for horizontal fullscreen play. Rotate the device, tap activate, and keep the phone sideways.", "Ativar tela cheia horizontal": "Activate horizontal fullscreen", "Aguardando permissão do navegador...": "Waiting for browser permission...", "Carregando Release Candidate AAA...": "Loading AAA Release Candidate...", "Primeiros passos": "First steps", "Construa uma banda lendária": "Build a legendary band", "O ciclo principal é simples: gerencie a equipe, componha músicas, grave no estúdio, lance singles, promova nas redes, faça shows e avance a semana para evoluir.": "The main loop is simple: manage the team, compose songs, record in the studio, release singles, promote on social media, play shows, and advance the week to evolve.", "Começar carreira": "Start career", "Ver checklist": "View checklist", "Fundador / Vocalista": "Founder / Vocalist", "Autosave pronto": "Autosave ready", "New Game": "New Game", "Continue": "Continue", "Load Game": "Load Game", "Settings": "Settings", "Credits": "Credits", "Release Candidate": "Release Candidate", "QA Comercial": "Commercial QA", "Assets": "Assets", "Onboarding": "Onboarding", "Perfil e Carreira": "Profile and Career", "Perfil": "Profile", "Banda": "Band", "Compor": "Compose", "Estúdio": "Studio", "Lançar": "Release", "Shows": "Shows", "Social": "Social", "Eventos": "Events", "Mercado IA": "AI Market", "Staff": "Staff", "Finanças": "Finance", "Turnês": "Tours", "Ranking": "Ranking", "Voltar": "Back", "Salvar Agora": "Save Now", "Continuar Último Save": "Continue Latest Save", "Salvar Perfil": "Save Profile", "Criar/Editar Banda": "Create/Edit Band", "Continuar": "Continue", "Voltar ao Lobby": "Back to Lobby", "Voltar ao RC": "Back to RC", "Voltar ao Social": "Back to Social", "Voltar aos Eventos": "Back to Events", "Voltar aos Shows": "Back to Shows", "Voltar à composição": "Back to composition", "Voltar às Finanças": "Back to Finance", "Voltar às Turnês": "Back to Tours", "Voltar ao Estúdio": "Back to Studio", "Voltar ao Lançamento": "Back to Release", "Nome artístico": "Stage name", "País": "Country", "Cidade de origem": "Hometown", "Dificuldade": "Difficulty", "Normal": "Normal", "Realista": "Realistic", "Lenda": "Legend", "Avatar do Artista": "Artist Avatar", "Identidade": "Identity", "Progresso": "Progress", "Reputação Local": "Local Reputation", "Carismático": "Charismatic", "Criativo": "Creative", "Disciplinado": "Disciplined", "Rebelde": "Rebel", "Escolha seu avatar": "Choose your avatar", "Sua identidade": "Your identity", "Modo inicial": "Starting mode", "Criar nova banda": "Create new band", "Entrar em uma banda": "Join a band", "Identidade da banda": "Band identity", "Nome da banda": "Band name", "Estilo musical": "Music style", "Estilo principal": "Main style", "Formação": "Formation", "Função": "Role", "Nome": "Name", "Vocalista": "Vocalist", "Guitarrista": "Guitarist", "Baixista": "Bassist", "Baterista": "Drummer", "Tecladista": "Keyboardist", "DJ": "DJ", "Quarteto": "Quartet", "Trio": "Trio", "Duo": "Duo", "Brasil": "Brazil", "Estados Unidos": "United States", "Reino Unido": "United Kingdom", "Japão": "Japan", "Argentina": "Argentina", "Alemanha": "Germany", "Próxima ação recomendada": "Recommended next action", "Contratar staff essencial": "Hire essential staff", "Siga o ciclo principal para evoluir a banda.": "Follow the main loop to evolve the band.", "Ir para ação": "Go to action", "Avançar semana": "Advance week", "Ciclo da Carreira": "Career Loop", "Agenda": "Schedule", "E-mails": "Emails", "GERENCIAR": "MANAGE", "PRODUZIR": "PRODUCE", "PROMOVER": "PROMOTE", "PERFORMAR": "PERFORM", "EVOLUIR": "EVOLVE", "Prontidão": "Readiness", "Próxima fase Estúdio": "Next phase Studio", "Próxima fase Lançamento": "Next phase Release", "Próxima fase Shows": "Next phase Shows", "Próxima fase: Lançamento": "Next phase: Release", "Ir para Estúdio": "Go to Studio", "Ir para Shows": "Go to Shows", "Jogar agora": "Play now", "Jogar": "Play", "Menu": "Menu", "Crie novas músicas": "Create new songs", "Composição Musical": "Music Composition", "Música em criação": "Song in progress", "Título": "Title", "Gênero": "Genre", "Tema": "Theme", "BPM": "BPM", "Tom": "Key", "Intensidade": "Intensity", "Estrutura": "Structure", "Letra / Direção": "Lyrics / Direction", "Partes": "Parts", "Qualidade Final": "Final Quality", "Hit": "Hit", "Originalidade": "Originality", "Emoção": "Emotion", "Finalizar demo": "Finish demo", "Gerar ideia": "Generate idea", "Polir composição": "Polish composition", "Biblioteca": "Library", "Demos finalizadas entram aqui e depois serão usadas no estúdio, lançamentos e shows.": "Finished demos appear here and are then used in the studio, releases and shows.", "Pipeline Estúdio": "Studio Pipeline", "Projetos": "Projects", "Direção sonora": "Sound direction", "Produtor": "Producer", "Orçamento extra": "Extra budget", "Takes de gravação": "Recording takes", "Mixagem": "Mix", "Masterização": "Mastering", "Gravar take": "Record take", "Finalizar master": "Finish master", "Ajuste a produção antes de finalizar a master.": "Adjust the production before finishing the master.", "Produção própria": "Self production", "Produtor Vintage Rock": "Vintage Rock Producer", "Produtor Radio Hit": "Radio Hit Producer", "Produtor Metal Arena": "Metal Arena Producer", "Equilibrado": "Balanced", "Equilibrada": "Balanced", "Cru e orgânico": "Raw and organic", "Polido internacional": "International polish", "Cinemático ao vivo": "Live cinematic", "Lançamento Musical": "Music Release", "Formato": "Format", "Plataforma foco": "Focus platform", "Janela": "Window", "Preço / Estratégia": "Price / Strategy", "Custo da campanha": "Campaign cost", "Clipe / Conteúdo Visual": "Music video / Visual content", "PR / Imprensa": "PR / Press", "Publicar": "Publish", "Auto campanha": "Auto campaign", "Masters Disponíveis": "Available masters", "Previsão Comercial": "Commercial forecast", "Streams": "Streams", "Chart": "Chart", "Crítica": "Critic", "Receita prevista": "Projected revenue", "Custo previsto": "Projected cost", "Single": "Single", "EP": "EP", "Álbum": "Album", "Padrão": "Standard", "Premium": "Premium", "Viral": "Viral", "Baixo custo viral": "Low-cost viral", "Premium de fã-base": "Fanbase premium", "Show ao Vivo": "Live Show", "Preparar Show": "Prepare Show", "Tipo de show": "Show type", "Preço do ingresso": "Ticket price", "Produção / Luz / Palco": "Production / Lights / Stage", "Merch por fã": "Merch per fan", "Setlist": "Setlist", "Iniciar show": "Start show", "Interagir": "Interact", "Crowd chant": "Crowd chant", "Solo": "Solo", "Corrigir falha": "Fix issue", "Encore": "Encore", "Encerrar": "Finish", "Performance": "Performance", "Energia": "Energy", "Público": "Audience", "Hype ao vivo": "Live hype", "Risco técnico / Cena": "Technical risk / Scene", "Bilheteria": "Box office", "Merch": "Merch", "Opening Act": "Opening Act", "Headliner": "Headliner", "Festival Slot": "Festival Slot", "Arena Special": "Arena Special", "Underground Club": "Underground Club", "Theater Hall": "Theater Hall", "Festival Stage": "Festival Stage", "Arena Gold": "Arena Gold", "Gerenciar Social": "Manage Social", "Tipo de ação": "Action type", "Tom da comunicação": "Communication tone", "Investimento em impulsionamento": "Boosting investment", "Publicar ação": "Publish action", "Escolha uma ação para movimentar a base de fãs.": "Choose an action to move the fanbase.", "Alcance": "Reach", "Viralização": "Virality", "Comentários dos fãs": "Fan comments", "Histórico Social": "Social History", "Post de bastidor": "Backstage post", "Teaser de música": "Song teaser", "Anúncio de show": "Show announcement", "Live com fãs": "Fan live stream", "Entrevista polêmica": "Controversial interview", "Autêntico": "Authentic", "Comercial agressiva": "Aggressive commercial", "Controle de crise": "Crisis control", "Silencioso": "Silent", "Economia / Contratos": "Economy / Contracts", "Controle Financeiro": "Financial Control", "Caixa": "Cash", "Receita mensal": "Monthly revenue", "Despesas mensais": "Monthly expenses", "Saldo previsto": "Projected balance", "Saúde Comercial": "Commercial health", "Simular mês financeiro": "Simulate financial month", "Gravadoras / Distribuição": "Labels / Distribution", "Patrocinadores": "Sponsors", "Contratos Ativos": "Active contracts", "Histórico Financeiro": "Financial History", "Simular mês": "Simulate month", "Receita bruta prevista": "Projected gross revenue", "Custo / Lucro": "Cost / Profit", "Royalties Dinâmicos": "Dynamic royalties", "Camisetas de turne": "Tour T-shirts", "Jaquetas premium": "Premium jackets", "Vinil colecionador": "Collector vinyl", "Pacote VIP backstage": "Backstage VIP package", "Turnês Internacionais": "International Tours", "Plano de Turnê": "Tour Plan", "Região-alvo": "Target region", "Transporte": "Transport", "Equipe de estrada": "Road crew", "Executar turnê": "Run tour", "Descansar equipe": "Rest crew", "Prontidão Global": "Global readiness", "Hype internacional": "International hype", "Custo logístico": "Logistics cost", "Risco logístico": "Logistics risk", "Fadiga Dinâmica": "Dynamic fatigue", "Rotas Disponíveis": "Available routes", "Diário da Turnê": "Tour diary", "América Latina": "Latin America", "Global": "Global", "Van independente": "Independent van", "Ônibus noturno econômico": "Economy night bus", "Tour bus profissional": "Professional tour bus", "Jato / voos premium": "Jet / premium flights", "Equipe enxuta": "Lean crew", "Equipe equilibrada": "Balanced crew", "Equipe premium": "Premium crew", "Rotas Modulares": "Modular routes", "Eventos Dinâmicos": "Dynamic Events", "Novo evento": "New event", "Tom da resposta": "Response tone", "Gerar repercussão": "Generate repercussion", "Resolver evento": "Resolve event", "Próximo Evento": "Next Event", "Escolhas Disponíveis": "Available Choices", "Resultado previsto": "Projected result", "Histórico Narrativo": "Narrative History", "Oportunidade": "Opportunity", "Feriado internacional": "International holiday", "Semana de festival": "Festival week", "IA de Mercado Musical": "Music Market AI", "Mercado Global": "Global Market", "Estratégia": "Strategy", "Simular semana de mercado": "Simulate market week", "Tendências globais": "Global trends", "Bandas rivais": "Rival bands", "Imprensa Reativa": "Reactive press", "Previsão da IA": "AI forecast", "Pressão dos rivais 0": "Rival pressure 0", "Risco de mercado 0": "Market risk 0", "Chance de chart 0": "Chart chance 0", "Gêneros em alta": "Trending genres", "QA Comercial / Anti-Quebra": "Commercial QA / Anti-Break", "QA Score": "QA Score", "Rodar QA agora": "Run QA now", "Limpar log": "Clear log", "Moderação Anti-quebra": "Anti-break moderation", "Teste automático": "Automatic test", "Forçar tela cheia": "Force fullscreen", "Modo mobile horizontal": "Mobile landscape mode", "Resetar save local": "Reset local save", "Backup de save JSON": "Save backup JSON", "Exportar backup do save": "Export save backup", "Exportar save": "Export save", "Checklist da build": "Build checklist", "Checklist para venda": "Sales checklist", "Próximas pendências comerciais": "Next commercial pending items", "Release Candidate AAA": "AAA Release Candidate", "RC Score": "RC Score", "Polimento aplicado": "Polish applied", "Loading cinematográfico ON": "Cinematic loading ON", "Tutorial inicial ON": "Initial tutorial ON", "Áudio de interface ON": "Interface audio ON", "Microinterações de botão ON": "Button microinteractions ON", "Balanceamento semanal RC": "Weekly RC balance", "Build web jogável em PC OK": "Playable web build on PC OK", "Revisão humana PT/EN/ES Pendente": "Human PT/EN/ES review Pending", "Testar em Android real Pendente": "Test on real Android Pending", "Testar em iPhone/iPad real Pendente": "Test on real iPhone/iPad Pending", "Trocar placeholders por artes oficiais Pendente": "Replace placeholders with official art Pending", "Onboarding Internacional": "International Onboarding", "Primeira hora de jogo": "First hour of play", "Missões guiadas": "Guided missions", "Recompensas iniciais": "Initial rewards", "Exportar plano UX": "Export UX plan", "Resetar tutorial": "Reset tutorial", "Resgatar recompensa": "Claim reward", "Abrir tutorial": "Open tutorial", "Ver tutorial": "View tutorial", "Roteiro comercial da primeira hora": "Commercial first-hour script", "Clareza": "Clarity", "O jogador recebe uma sequência de missões simples para entender carreira, composição, estúdio, lançamento, social e show.": "The player receives a sequence of simple missions to understand career, composition, studio, release, social, and show systems.", "Componha, grave e lance sua primeira música.": "Compose, record and release your first song.", "Crie sua identidade e salve a carreira.": "Create your identity and save the career.", "Monte setlist, faça shows e reinvista o dinheiro.": "Build a setlist, play shows and reinvest the money.", "Ativo": "Active", "Ligado": "On", "Desligado": "Off", "Pendente": "Pending", "Pronta para resgate": "Ready to claim", "Recompensa recebida": "Reward received", "Aprovado para testes externos": "Approved for external testing", "Revisar pendências": "Review pending items", "Sistema estavel.": "System stable.", "Nenhum erro detectado. Sistema estavel.": "No errors detected. System stable.", "Salvo": "Saved", "Autosave": "Autosave", "Novo jogo": "New game", "sem data": "no date", "Semana": "Week", "fãs": "fans", "Reputação:": "Reputation:", "Rock Alternativo": "Alternative Rock", "Rock": "Rock", "Metal": "Metal", "Indie": "Indie", "Punk": "Punk", "Hard Rock": "Hard Rock", "Alternative": "Alternative", "Pop Rock": "Pop Rock", "Progressive": "Progressive", "Experimental": "Experimental", "Underground fiel": "Loyal underground", "Fase Local": "Local phase", "Global Stream": "Global Stream", "Indie Radar": "Indie Radar", "Radio Network": "Radio Network", "ClipTube": "ClipTube", "Rádio/Streaming": "Radio/Streaming", "Feed / Social": "Feed / Social", "Viral / Social": "Viral / Social", "Reviews / Social": "Reviews / Social", "Autenticidade": "Authenticity", "Prestígio crítico": "Critical prestige", "Lealdade dos fãs": "Fan loyalty", "Fit patrocinador": "Sponsor fit", "Negociação": "Negotiation", "Produção": "Production", "Scouting": "Scouting", "Marketing": "Marketing", "Logística": "Logistics", "Estabilidade": "Stability", "Sinergia": "Synergy", "Moral": "Morale", "Ego médio": "Average ego", "Força geral": "Overall strength", "Estado da Banda": "Band Status", "Banda completa": "Complete band", "Contratados": "Hired", "Sem staff contratado. A banda economiza dinheiro, mas perde velocidade comercial.": "No staff hired. The band saves money but loses commercial speed.", "Um portal acusa a banda de soar comercial demais após o último lançamento.": "Um portal acusa a banda de soar comercial demais após o último lançamento.", "Encontra músicos raros, produtores e oportunidades internacionais.": "Encontra músicos raros, produtores e oportunidades internacionais.", "solidão na turnê": "solidão na turnê", "refrão": "refrão", "👥 12.450 fãs": "👥 12.450 fãs", "Lançamentos": "Lançamentos", "Rio de Janeiro": "Rio de Janeiro", "Conflitos Dinâmicos": "Conflitos Dinâmicos", "Preparación": "Preparación", "Nova Música": "Nova Música", "Lançar o primeiro single": "Lançar o primeiro single", "Vi o vídeo no feed e precisei procurar a banda.": "Vi o vídeo no feed e precisei procurar a banda.", "Reduz falhas de logística, fadiga e risco em viagens.": "Reduz falhas de logística, fadiga e risco em viagens.", "Produção detectou risco de falha em luz, PA ou troca de instrumentos. Use Corrigir falha se necessário.": "Produção detectou risco de falha em luz, PA ou troca de instrumentos. Use Corrigir falha se necessário.", " • Próximo passo: ": " • Próximo passo: ", "Aguardando scan --": "Aguardando scan --", "Lançar Música": "Lançar Música", "<p class=\"muted\">Nenhum lançamento publicado ainda. Publique uma master para abrir charts e reviews.</p>": "<p class=\"muted\">Nenhum lançamento publicado ainda. Publique uma master para abrir charts e reviews.</p>", "RC": "RC", "Lendário": "Lendário", "Refrão Arena Fire": "Refrão Arena Fire", "Folha mensal": "Folha mensal", "02": "02", "🇦🇷 Argentina": "🇦🇷 Argentina", "Produção do Show": "Produção do Show", "Sistema real de saves: até 5 slots, autosave, save manual, migração de versão e reset seguro.": "Sistema real de saves: até 5 slots, autosave, save manual, migração de versão e reset seguro.", "Gravadoras, sponsors e caixa": "Gravadoras, sponsors e caixa", "Leve a melhor música para gravação, mixagem e masterização.": "Leve a melhor música para gravação, mixagem e masterização.", "Fase 9: o mercado reage a lançamentos, shows, posts, entrevistas, virais e críticas. Este sistema alimenta fãs, hype, reputação e futuras propostas internacionais.": "Fase 9: o mercado reage a lançamentos, shows, posts, entrevistas, virais e críticas. Este sistema alimenta fãs, hype, reputação e futuras propostas internacionais.", "Rock Nation Festival: proposta recebida": "Rock Nation Festival: proposta recebida", "Am": "Am", "Riff • Verso • Refrão • Solo • Refrão Duplo": "Riff • Verso • Refrão • Solo • Refrão Duplo", "Acidente técnico no palco": "Acidente técnico no palco", "Equipe recuperou energia e reduziu risco logístico. Custo $ 18.000.": "Equipe recuperou energia e reduziu risco logístico. Custo $ 18.000.", "Elige género, BPM, tonalidad, intensidad y estructura.": "Elige género, BPM, tonalidad, intensidad y estructura.", "03": "03", "Escolha até 8 músicas. Lançamentos e masters têm mais força de público.": "Escolha até 8 músicas. Lançamentos e masters têm mais força de público.", "Fase 4: contrate profissionais, controle salários e transforme a banda em uma operação comercial internacional.": "Fase 4: contrate profissionais, controle salários e transforme a banda em uma operação comercial internacional.", "Produção Ativa": "Produção Ativa", "River Crow": "River Crow", "Fase 10: gravadoras, patrocinadores, royalties, merch, despesas mensais e saúde financeira da banda.": "Fase 10: gravadoras, patrocinadores, royalties, merch, despesas mensais e saúde financeira da banda.", "Diagnóstico anti-quebra ativo": "Diagnóstico anti-quebra ativo", "Grupos Oficiais": "Grupos Oficiais", "Anti-quebra ON": "Anti-quebra ON", "Modo móvil horizontal": "Modo móvil horizontal", "Lançamento: marketing, social, reviews e receita inicial.": "Lançamento: marketing, social, reviews e receita inicial.", "A plateia cantou o refrão sozinha. Vídeos começam a viralizar nas redes.": "A plateia cantou o refrão sozinha. Vídeos começam a viralizar nas redes.", "Boa para início de carreira, melhora propostas pequenas e agenda local.": "Boa para início de carreira, melhora propostas pequenas e agenda local.", "Caixa insuficiente para bancar esta produção. Reduza venue/produção ou lance músicas antes.": "Caixa insuficiente para bancar esta produção. Reduza venue/produção ou lance músicas antes.", "Versão visível": "Versão visível", "Auto setup": "Auto setup", "Contrate ao menos um produtor, empresário ou social media para acelerar a carreira.": "Contrate ao menos um produtor, empresário ou social media para acelerar a carreira.", "Salvar e voltar": "Salvar e voltar", "Band Legacy": "Band Legacy", "Tokyo": "Tokyo", "Conflitos, imprensa, prêmios e decisões": "Conflitos, imprensa, prêmios e decisões", "Complete missões curtas para entender o ciclo comercial: identidade, música, estúdio, lançamento, show e evolução semanal.": "Complete missões curtas para entender o ciclo comercial: identidade, música, estúdio, lançamento, show e evolução semanal.", "Pressão do patrocinador": "Pressão do patrocinador", "A faixa é promissora. Mais uma parte forte pode transformar a composição em single.": "A faixa é promissora. Mais uma parte forte pode transformar a composição em single.", "A estética dark premium está chamando atenção no circuito.": "A estética dark premium está chamando atenção no circuito.", "Inicializando diagnóstico...": "Inicializando diagnóstico...", "Criatividade": "Criatividade", "Fase 7: transforme masters em singles, EPs e álbuns. Escolha campanha, plataforma, preço e janela para disputar charts globais.": "Fase 7: transforme masters em singles, EPs e álbuns. Escolha campanha, plataforma, preço e janela para disputar charts globais.", "Mercado Dinâmico": "Mercado Dinâmico", "QA": "QA", "Sexta comum": "Sexta comum", "Caminhos e nomes finais": "Caminhos e nomes finais", "Editar Integrante": "Editar Integrante", "Identidade da Banda": "Identidade da Banda", "recomeço": "recomeço", "BL": "BL", "Intro • Verso • Refrão • Solo • Final": "Intro • Verso • Refrão • Solo • Final", "Compor primeira música": "Compor primeira música", "Fase 4: identidade integrada ao ciclo principal de carreira, com autosave, slots, migração e reset seguro.": "Fase 4: identidade integrada ao ciclo principal de carreira, com autosave, slots, migração e reset seguro.", "$ 0 / $ 0": "$ 0 / $ 0", "Histórico": "Histórico", "0%": "0%", "Ir para o jogo": "Ir para o jogo", "Solo incendiou o público e elevou a performance.": "Solo incendiou o público e elevou a performance.", "ZIP completo com código, dados e docs; assets oficiais podem ser externos, desde que os caminhos deste manifesto sejam mantidos.": "ZIP completo com código, dados e docs; assets oficiais podem ser externos, desde que os caminhos deste manifesto sejam mantidos.", "Prepare campanha, janela comercial, plataforma foco e preço.": "Prepare campanha, janela comercial, plataforma foco e preço.", "🇺🇸 Estados Unidos": "🇺🇸 Estados Unidos", "Tendências do mercado": "Tendências do mercado", "Caixa insuficiente. Faça shows ou grave singles antes de contratar esse profissional.": "Caixa insuficiente. Faça shows ou grave singles antes de contratar esse profissional.", "Os assets oficiais devem substituir os provisórios mantendo o mesmo caminho ou usando o nome final indicado no documento.": "Os assets oficiais devem substituir os provisórios mantendo o mesmo caminho ou usando o nome final indicado no documento.", "<p class=\"muted\">Histórico vazio. As campanhas sociais vão registrar crescimento e risco.</p>": "<p class=\"muted\">Histórico vazio. As campanhas sociais vão registrar crescimento e risco.</p>", "A banda está no início da estrada. O público percebe potencial, mas a identidade ainda precisa ser consolidada.": "A banda está no início da estrada. O público percebe potencial, mas a identidade ainda precisa ser consolidada.", "Fase 11: primeira hora guiada, objetivos iniciais, recompensas e experiência clara para jogadores novos em PT-BR, EN e ES.": "Fase 11: primeira hora guiada, objetivos iniciais, recompensas e experiência clara para jogadores novos em PT-BR, EN e ES.", "A ação pareceu natural e fortaleceu a comunidade.": "A ação pareceu natural e fortaleceu a comunidade.", "Pipeline Composição": "Pipeline Composição", "Fase 5: crie músicas combinando letra, riff, refrão, ponte, solo e mixagem. O sistema calcula qualidade, potencial de hit, originalidade e impacto emocional.": "Fase 5: crie músicas combinando letra, riff, refrão, ponte, solo e mixagem. O sistema calcula qualidade, potencial de hit, originalidade e impacto emocional.", "Auto show": "Auto show", "<p class=\"muted\">Sem comentários recentes. Publique uma ação social para gerar reação do público.</p>": "<p class=\"muted\">Sem comentários recentes. Publique uma ação social para gerar reação do público.</p>", "<p class=\"muted\">Nenhuma música finalizada ainda.</p>": "<p class=\"muted\">Nenhuma música finalizada ainda.</p>", "Monte a apresentação e prepare o palco.": "Monte a apresentação e prepare o palco.", "RockWave": "RockWave", "Save System": "Save System", "A campanha pode viralizar, mas há risco real de backlash. Ajuste tom, staff ou investimento.": "A campanha pode viralizar, mas há risco real de backlash. Ajuste tom, staff ou investimento.", "Assets obrigatórios verificados": "Assets obrigatórios verificados", "NA MÚSICA": "NA MÚSICA", "Crítica viral negativa": "Crítica viral negativa", "EN": "EN", "Rutas seguras, recuperación de guardado, verificación de assets, fallback de pantalla y registro local.": "Rutas seguras, recuperación de guardado, verificación de assets, fallback de pantalla y registro local.", "Vale Games • Band Legacy Release Candidate v1.1.0": "Vale Games • Band Legacy Release Candidate v1.1.0", "Discussão entre integrantes": "Discussão entre integrantes", "Singles, EPs, charts e hype": "Singles, EPs, charts e hype", "fé no palco": "fé no palco", "A música tem cheiro de single internacional. Invista em estúdio, marketing e lançamento forte.": "A música tem cheiro de single internacional. Invista em estúdio, marketing e lançamento forte.", "Recompensa possível": "Recompensa possível", "Escolha português do Brasil, inglês ou espanhol. A escolha fica salva no navegador.": "Escolha português do Brasil, inglês ou espanhol. A escolha fica salva no navegador.", "Monte a estrutura da música e finalize o primeiro rascunho.": "Monte a estrutura da música e finalize o primeiro rascunho.", "Salvar Integrante": "Salvar Integrante", "★ 7.850 XP": "★ 7.850 XP", "Selecione sala, produtor, direção sonora e finalize uma master.": "Selecione sala, produtor, direção sonora e finalize uma master.", "Continuar último guardado": "Continuar último guardado", "Charts": "Charts", "Estúdio e lançamentos": "Estúdio e lançamentos", "01": "01", "🇯🇵 Japão": "🇯🇵 Japão", "Fase 4: identidad integrada al ciclo principal de carrera, con autoguardado, ranuras, migración y reinicio seguro.": "Fase 4: identidad integrada al ciclo principal de carrera, con autoguardado, ranuras, migración y reinicio seguro.", "New York": "New York", "Prepare setlist, produção e interação com o público.": "Prepare setlist, produção e interação com o público.", "ES": "ES", "Equilíbrio entre custo, qualidade e agilidade para singles fortes.": "Equilíbrio entre custo, qualidade e agilidade para singles fortes.", "Equipe profissional forte. A carreira já pode buscar festivais, contratos e turnês maiores.": "Equipe profissional forte. A carreira já pode buscar festivais, contratos e turnês maiores.", "A": "A", "público latino intenso": "público latino intenso", "🇧🇷 Brasil": "🇧🇷 Brasil", "Caixa insuficiente para contratação": "Caixa insuficiente para contratação", "Elige portugués de Brasil, inglés o español. Tu elección queda guardada en el navegador.": "Elige portugués de Brasil, inglés o español. Tu elección queda guardada en el navegador.", "Status Interno": "Status Interno", "Overall": "Overall", "Heat": "Heat", "0": "0", "Alerta técnico": "Alerta técnico", "Risco de backlash": "Risco de backlash", "Fase 11: mapa de rotas, logística global, transporte, equipe de estrada, fadiga, risco e expansão mundial da banda.": "Fase 11: mapa de rotas, logística global, transporte, equipe de estrada, fadiga, risco e expansão mundial da banda.", "G": "G", "Dispositivo Anti-Quebra": "Dispositivo Anti-Quebra", "caos artístico": "caos artístico", "Reputación local": "Reputación local", "Exportação de backup disponível": "Exportação de backup disponível", "Eventos dinámicos": "Eventos dinámicos", "Áudio de interface": "Áudio de interface", "Aumenta presença de palco, moral e controle de conflitos.": "Aumenta presença de palco, moral e controle de conflitos.", "Grande alcance internacional, mas reduz liberdade artística.": "Grande alcance internacional, mas reduz liberdade artística.", "180 / 1.000 XP": "180 / 1.000 XP", "A campanha foi intensa e parte do público reagiu mal.": "A campanha foi intensa e parte do público reagiu mal.", "Gravar master no estúdio": "Gravar master no estúdio", "Atenção: despesas superam receitas. Negocie patrocínio, reduza custos ou lance conteúdo.": "Atenção: despesas superam receitas. Negocie patrocínio, reduza custos ou lance conteúdo.", "Contrate equipe": "Contrate equipe", "Qualidade": "Qualidade", "Carregando análise financeira...": "Carregando análise financeira...", "Semana vazia": "Semana vazia", "Resultado da Produção": "Resultado da Produção", "Um patrocinador quer influenciar figurino e setlist para aumentar exposição de marca.": "Um patrocinador quer influenciar figurino e setlist para aumentar exposição de marca.", "Campanha segura para fortalecer fãs e preparar o próximo passo da carreira.": "Campanha segura para fortalecer fãs e preparar o próximo passo da carreira.", "Fase 9: validação técnica para venda internacional, teste de navegação, saves, idioma, assets e responsividade antes da troca final dos assets oficiais.": "Fase 9: validação técnica para venda internacional, teste de navegação, saves, idioma, assets e responsividade antes da troca final dos assets oficiais.", "Provisória": "Provisória", "Produção cara, som internacional e grande potencial para álbum ou single mundial.": "Produção cara, som internacional e grande potencial para álbum ou single mundial.", "Foco de merch": "Foco de merch", "Ásia": "Ásia", "Versão visível sincronizada": "Versão visível sincronizada", "Completa misiones cortas para aprender el ciclo comercial: identidad, música, estudio, lanzamiento, show y progresión semanal.": "Completa misiones cortas para aprender el ciclo comercial: identidad, música, estudio, lanzamiento, show y progresión semanal.", "Risco": "Risco", "Semana 1": "Semana 1", "América do Norte": "América do Norte", "Vitória narrativa": "Vitória narrativa", "Avançar a carreira": "Avançar a carreira", "Produção arriscada: faltam orçamento, staff ou estúdio melhor. O anti-quebra vai impedir travamento, mas a carreira pode sofrer.": "Produção arriscada: faltam orçamento, staff ou estúdio melhor. O anti-quebra vai impedir travamento, mas a carreira pode sofrer.", "Caça-talentos": "Caça-talentos", "Rutas, logística y fans globales": "Rutas, logística y fans globales", "Slots de save disponíveis": "Slots de save disponíveis", "Gerar NPC": "Gerar NPC", "São Paulo/SP": "São Paulo/SP", "Assets Trocáveis": "Assets Trocáveis", "Bm": "Bm", "Empresária": "Empresária", "<p class=\"muted\">Histórico vazio. O primeiro show vai registrar resultado, lucro e crescimento de fãs.</p>": "<p class=\"muted\">Histórico vazio. O primeiro show vai registrar resultado, lucro e crescimento de fãs.</p>", "Improviso arriscado perdeu precisão, mas o show continuou seguro.": "Improviso arriscado perdeu precisão, mas o show continuou seguro.", "🇩🇪 Alemanha": "🇩🇪 Alemanha", "Próxima acción recomendada": "Próxima acción recomendada", "Eleva qualidade de gravação, mix e potencial de hit no estúdio.": "Eleva qualidade de gravação, mix e potencial de hit no estúdio.", "BAND": "BAND", "Interação com o público": "Interação com o público", "Casas médias buscam artistas com presença forte em vídeo curto e bastidores.": "Casas médias buscam artistas com presença forte em vídeo curto e bastidores.", "0% / local": "0% / local", "Dm": "Dm", "campanha ainda precisa de força": "campanha ainda precisa de força", "12 / 100": "12 / 100", "PT-BR": "PT-BR", "Algoritmo Ativo": "Algoritmo Ativo", "04": "04", "Campanha": "Campanha", "Fase 6: setlist, cidade, tipo de show, produção, falhas técnicas, crowd chant, encore, bilheteria, merch, fãs e reputação.": "Fase 6: setlist, cidade, tipo de show, produção, falhas técnicas, crowd chant, encore, bilheteria, merch, fãs e reputação.", "aumenta caixa, mas pressiona identidade artística.": "aumenta caixa, mas pressiona identidade artística.", "Aumenta hype, redes sociais e alcance de lançamentos.": "Aumenta hype, redes sociais e alcance de lançamentos.", "Assets Provisórios": "Assets Provisórios", "Escolha partes para formar uma música com identidade forte.": "Escolha partes para formar uma música com identidade forte.", "Clipe curto vertical": "Clipe curto vertical", "Hype, fãs, viralização e reputação": "Hype, fãs, viralização e reputação", "Em": "Em", "Runway": "Runway", "Fase 6: grave demos, escolha sala, ajuste takes, mixagem e masterização para transformar composições em masters comerciais.": "Fase 6: grave demos, escolha sala, ajuste takes, mixagem e masterização para transformar composições em masters comerciais.", "Fase 12: conflitos internos, entrevistas, escândalos, premiações, escolhas narrativas e consequências reais na carreira.": "Fase 12: conflitos internos, entrevistas, escândalos, premiações, escolhas narrativas e consequências reais na carreira.", "F#m": "F#m", "Asset Pipeline Comercial": "Asset Pipeline Comercial", "Projeto em produção. Ajuste takes, mix, master e sala para equilibrar custo, qualidade e autenticidade.": "Projeto em produção. Ajuste takes, mix, master e sala para equilibrar custo, qualidade e autenticidade.", "Um equipamento falha durante a passagem de som e a equipe precisa agir rápido.": "Um equipamento falha durante a passagem de som e a equipe precisa agir rápido.", "D": "D", "Caixa insuficiente para finalizar a master. Reduza orçamento/sala ou faça shows primeiro.": "Caixa insuficiente para finalizar a master. Reduza orçamento/sala ou faça shows primeiro.", "Masters Finalizadas": "Masters Finalizadas", "↻": "↻", "Estas faixas irão alimentar lançamentos, charts, shows e turnês nas próximas fases.": "Estas faixas irão alimentar lançamentos, charts, shows e turnês nas próximas fases.", "Premiação": "Premiação", "<span class=\"release-badge\">PROVISÓRIA</span>": "<span class=\"release-badge\">PROVISÓRIA</span>", "Equipe ajustou retorno, luz e troca de instrumentos antes do público perceber.": "Equipe ajustou retorno, luz e troca de instrumentos antes do público perceber.", "Hype, fans, viralización y reputación": "Hype, fans, viralización y reputación", "Profissional": "Profissional", "🇬🇧 Reino Unido": "🇬🇧 Reino Unido", "25 MAI — Show RJ": "25 MAI — Show RJ", "Gira el móvil": "Gira el móvil", "Salvar Banda": "Salvar Banda", "Lançamentos publicados alimentam reputação, fãs, agenda de shows e rankings internacionais nas próximas fases.": "Lançamentos publicados alimentam reputação, fãs, agenda de shows e rankings internacionais nas próximas fases.", "Defina artista, país, cidade e nome da banda.": "Defina artista, país, cidade e nome da banda.", "A ideia ainda parece crua. Combine riff, refrão, letra e emoção antes de gravar.": "A ideia ainda parece crua. Combine riff, refrão, letra e emoção antes de gravar.", "Campanha Social": "Campanha Social", "Fase 10: mapa de caminhos oficiais, troca segura de placeholders, validação visual e exportação do manifesto para criação dos assets definitivos.": "Fase 10: mapa de caminhos oficiais, troca segura de placeholders, validação visual e exportação do manifesto para criação dos assets definitivos.", "PT-BR / EN / ES": "PT-BR / EN / ES", "Cidade": "Cidade", "Nível 1": "Nível 1", "Contrato interno Ativo": "Contrato interno Ativo", "Estúdio: sala, produtor, takes, mix e master.": "Estúdio: sala, produtor, takes, mix e master.", "2026 Global Rock Cycle": "2026 Global Rock Cycle", "Sons curtos de toque, sucesso e navegação. O navegador só libera áudio após o primeiro toque do usuário.": "Sons curtos de toque, sucesso e navegação. O navegador só libera áudio após o primeiro toque do usuário.", "Créditos": "Créditos", "gera prestígio, mas risco comercial alto": "gera prestígio, mas risco comercial alto", "Pré-Refrão": "Pré-Refrão", "05": "05", "Crítico indie": "Crítico indie", "cresce com crítica e viral orgânico": "cresce com crítica e viral orgânico", "Tendências, rivais, charts e regiões": "Tendências, rivais, charts e regiões", "Aumente hype e alcance antes do próximo show.": "Aumente hype e alcance antes do próximo show.", "Substituir assets provisórios por artes oficiais, revisar 100% dos textos narrativos em três idiomas, testar em aparelhos reais Android/iOS e preparar página de venda internacional.": "Substituir assets provisórios por artes oficiais, revisar 100% dos textos narrativos em três idiomas, testar em aparelhos reais Android/iOS e preparar página de venda internacional.", "Caixa insuficiente para publicar com esta campanha. Reduza marketing ou faça shows primeiro.": "Caixa insuficiente para publicar com esta campanha. Reduza marketing ou faça shows primeiro.", "Publique a master com campanha de marketing para gerar fãs e hype.": "Publique a master com campanha de marketing para gerar fãs e hype.", "Define artista, país, ciudad y nombre de la banda.": "Define artista, país, ciudad y nombre de la banda.", "América do Sul": "América do Sul", "cidade de mídia e festival": "cidade de mídia e festival", "Aguardando execução --": "Aguardando execução --", "Lanzar música": "Lanzar música", "Fãs começaram uma campanha para colocar a banda em um festival grande.": "Fãs começaram uma campanha para colocar a banda em um festival grande.", "fãs fiéis e merch forte": "fãs fiéis e merch forte", "v1.3.1_20260522_1948": "v1.3.1_20260522_1948", "Rotas, logística e fãs globais": "Rotas, logística e fãs globais", "Fullscreen horizontal, orientação mobile, escala do HUD, áudio, idioma e performance foram organizados para a versão internacional.": "Fullscreen horizontal, orientação mobile, escala do HUD, áudio, idioma e performance foram organizados para a versão internacional.", "Evoluir reputação da banda": "Evoluir reputação da banda", "Selecione uma master finalizada e prepare o lançamento comercial.": "Selecione uma master finalizada e prepare o lançamento comercial.", "Campanha espontânea de fãs": "Campanha espontânea de fãs", " Refrão mais memorável, ponte emocional e assinatura da banda reforçada.": " Refrão mais memorável, ponte emocional e assinatura da banda reforçada.", "Pipeline Lançamento": "Pipeline Lançamento", "Falha técnica controlada": "Falha técnica controlada", "Boa presença digital. Pode virar convite para palco maior.": "Boa presença digital. Pode virar convite para palco maior.", "Reputação: Lendária": "Reputação: Lendária", "Produza suas músicas": "Produza suas músicas", "<p class=\"muted\">Nenhuma master finalizada ainda. Grave uma demo no estúdio.</p>": "<p class=\"muted\">Nenhuma master finalizada ainda. Grave uma demo no estúdio.</p>", "Composição do primeiro single com escolhas musicais claras.": "Composição do primeiro single com escolhas musicais claras.", "Show em Tempo Real": "Show em Tempo Real", "Hype": "Hype", "Sistema real de guardado: hasta 5 ranuras, autoguardado, guardado manual, migración de versión y reinicio seguro.": "Sistema real de guardado: hasta 5 ranuras, autoguardado, guardado manual, migración de versión y reinicio seguro.", "Patrocínio": "Patrocínio", "Carregando evento narrativo...": "Carregando evento narrativo...", "Catálogo Público": "Catálogo Público", "$ 2.350.500": "$ 2.350.500", "Impacto previsto": "Impacto previsto", "Som de lançamento internacional. Esta master já pode sustentar campanha forte e turnê.": "Som de lançamento internacional. Esta master já pode sustentar campanha forte e turnê.", "Carregando plano internacional...": "Carregando plano internacional...", "02 JUN — Rock Nation Festival": "02 JUN — Rock Nation Festival", "Estúdio Indie Pro": "Estúdio Indie Pro", "Prontidão 0%": "Prontidão 0%", "LEGACY": "LEGACY", "Band Legacy fue diseñado para jugar en pantalla completa horizontal. Gira el dispositivo, toca activar y mantén el móvil en horizontal.": "Band Legacy fue diseñado para jugar en pantalla completa horizontal. Gira el dispositivo, toca activar y mantén el móvil en horizontal.", "São Paulo": "São Paulo", "Prêmios Progressivos": "Prêmios Progressivos", "Buenos Aires": "Buenos Aires", "fãs estão movimentando a prévia": "fãs estão movimentando a prévia", "68": "68", "Português do Brasil": "Português do Brasil", "Impacto do Staff": "Impacto do Staff", "A IA prevê alta chance de viralização. Boa janela para lançar clipe, show ou single.": "A IA prevê alta chance de viralização. Boa janela para lançar clipe, show ou single.", "Atmosfera • Crescendo • Explosão • Encore": "Atmosfera • Crescendo • Explosão • Encore", "Bebida energética": "Bebida energética", "Risco de conflito Baixo": "Risco de conflito Baixo", "Botões navegáveis detectados": "Botões navegáveis detectados", "Um jornalista pergunta se a banda está preparada para uma turnê maior depois do crescimento recente.": "Um jornalista pergunta se a banda está preparada para uma turnê maior depois do crescimento recente.", "Lobby": "Lobby", "Volte ao lobby, avance a semana e leia o log de evolução.": "Volte ao lobby, avance a semana e leia o log de evolução.", "Ajuste formação, staff, lançamentos e shows até alcançar novo marco.": "Ajuste formação, staff, lançamentos e shows até alcançar novo marco.", "O público precisa de mais energia ou interação antes do bis.": "O público precisa de mais energia ou interação antes do bis.", "Ir a la acción": "Ir a la acción", "Atualização automática": "Atualização automática", "IA de Público e Social Media": "IA de Público e Social Media", "Español": "Español", "mercado internacional crítico": "mercado internacional crítico", "Monte a identidade da sua banda, ajuste a formação e acompanhe sinergia, ego, moral e evolução dos integrantes.": "Monte a identidade da sua banda, ajuste a formação e acompanhe sinergia, ego, moral e evolução dos integrantes.", "Tendência: rock cinematográfico": "Tendência: rock cinematográfico", "Selecciona sala, productor, dirección sonora y termina una master.": "Selecciona sala, productor, dirección sonora y termina una master.", "Lançar música": "Lançar música", "Bis explosivo fechou a noite com sensação de show histórico.": "Bis explosivo fechou a noite com sensação de show histórico.", "Rotas seguras, recuperação de save, verificação de assets, fallback de tela e log local.": "Rotas seguras, recuperação de save, verificação de assets, fallback de tela e log local.", "Rise. Perform. Become a Legend.": "Rise. Perform. Become a Legend.", "O público está respondendo bem a bandas com visual dark premium e shows imersivos.": "O público está respondendo bem a bandas com visual dark premium e shows imersivos.", "C": "C", "O ciclo principal está ativo: gerenciar, produzir, promover, performar e evoluir.": "O ciclo principal está ativo: gerenciar, produzir, promover, performar e evoluir.", "Comentário dividido": "Comentário dividido", "Asset Score": "Asset Score", "Resumo do Manifesto": "Resumo do Manifesto", "Emocional": "Emocional", "crítica internacional está impressionada": "crítica internacional está impressionada", "Monta setlist, controla energía, resuelve fallas y termina el show.": "Monta setlist, controla energía, resuelve fallas y termina el show.", "Resultado técnico": "Resultado técnico", "Lisboa": "Lisboa", "Agende shows e turnês": "Agende shows e turnês", "Live Session": "Live Session", "superação": "superação", "Show ao vivo, setlist, público, merch e avanço de semana.": "Show ao vivo, setlist, público, merch e avanço de semana.", "Não ativo": "Não ativo", "Local": "Local", "Cada ação influencia reputação, público dos shows, resultados de lançamentos e convites futuros.": "Cada ação influencia reputação, público dos shows, resultados de lançamentos e convites futuros.", "Risco público": "Risco público", "Fase 8: polimento final, tutorial, áudio de UI, loading, balanceamento, checklist de venda e documentação para build internacional.": "Fase 8: polimento final, tutorial, áudio de UI, loading, balanceamento, checklist de venda e documentação para build internacional.", "Gravar Estúdio": "Gravar Estúdio", "$ 0": "$ 0", "Lançamento": "Lançamento", "Backgrounds --": "Backgrounds --", "Exportar manifesto": "Exportar manifesto", "úmido": "úmido", "Intro • Verso • Pré-Refrão • Refrão • Ponte • Refrão": "Intro • Verso • Pré-Refrão • Refrão • Ponte • Refrão", "Mobile Landscape": "Mobile Landscape", "Rodar scan de assets": "Rodar scan de assets", "Reputación:": "Reputación:", "English": "English", "v0.3": "v0.3", "Nombre artístico": "Nombre artístico", "O guitarrista quer mais destaque nos solos e ameaça expor a tensão nas redes.": "O guitarrista quer mais destaque nos solos e ameaça expor a tensão nas redes.", "Fã antigo": "Fã antigo", "Rock Alternativo • Brasil • São Paulo/SP": "Rock Alternativo • Brasil • São Paulo/SP", "Operação saudável: a banda pode investir em produção, shows e marketing.": "Operação saudável: a banda pode investir em produção, shows e marketing."}, "es-ES": {"Idioma": "Idioma", "Idioma / Language / Idioma": "Idioma / Language / Idioma", "Localização": "Localización", "Localização Internacional": "Localización Internacional", "Cobertura": "Cobertura", "Pacote de idiomas": "Paquete de idiomas", "Auditoria editorial": "Auditoría editorial", "Regras internacionais": "Reglas internacionales", "Exportar pacote de idiomas": "Exportar paquete de idiomas", "Voltar ao Menu": "Volver al menú", "Fase 12: revisão editorial PT-BR, EN e ES, catálogo de strings, textos dinâmicos, feedbacks de sistema e preparo para venda internacional.": "Fase 12: revisión editorial PT-BR, EN y ES, catálogo de textos, textos dinámicos, feedbacks del sistema y preparación para venta internacional.", "Todos os textos principais foram catalogados em português do Brasil, inglês e espanhol. Termos de marca, nomes próprios e estilos musicais ficam preservados.": "Todos los textos principales fueron catalogados en portugués de Brasil, inglés y español. Los términos de marca, nombres propios y estilos musicales se preservan.", "Aguardando auditoria --": "Esperando auditoría --", "Sem texto fixo novo": "Sin nuevo texto fijo", "Novas telas devem usar catálogo ou data-i18n.": "Las nuevas pantallas deben usar el catálogo o data-i18n.", "Moeda e números localizados": "Moneda y números localizados", "HUD e relatórios usam locale do idioma atual.": "El HUD y los informes usan la configuración regional del idioma actual.", "Fallback seguro": "Fallback seguro", "Se faltar tradução, o jogo mantém PT-BR e registra pendência.": "Si falta una traducción, el juego mantiene PT-BR y registra la pendiente.", "Exportável": "Exportable", "O pacote de localização pode ser exportado em JSON para revisão externa.": "El paquete de localización puede exportarse en JSON para revisión externa.", "Vire o celular": "Gira el móvil", "Band Legacy foi criado para jogar em tela cheia horizontal. Vire o aparelho, toque em ativar e mantenha o celular deitado.": "Band Legacy fue diseñado para jugar en pantalla completa horizontal. Gira el dispositivo, toca activar y mantén el móvil de lado.", "Ativar tela cheia horizontal": "Activar pantalla completa horizontal", "Aguardando permissão do navegador...": "Esperando permiso del navegador...", "Carregando Release Candidate AAA...": "Cargando Release Candidate AAA...", "Primeiros passos": "Primeros pasos", "Construa uma banda lendária": "Construye una banda legendaria", "O ciclo principal é simples: gerencie a equipe, componha músicas, grave no estúdio, lance singles, promova nas redes, faça shows e avance a semana para evoluir.": "El ciclo principal es simple: gestiona el equipo, compón canciones, graba en el estudio, lanza singles, promociona en redes, haz conciertos y avanza la semana para evolucionar.", "Começar carreira": "Comenzar carrera", "Ver checklist": "Ver checklist", "Fundador / Vocalista": "Fundador / Vocalista", "Autosave pronto": "Autoguardado listo", "New Game": "Nueva partida", "Continue": "Continuar", "Load Game": "Cargar partida", "Settings": "Ajustes", "Credits": "Créditos", "Release Candidate": "Release Candidate", "QA Comercial": "QA Comercial", "Assets": "Assets", "Onboarding": "Onboarding", "Perfil e Carreira": "Perfil y carrera", "Perfil": "Perfil", "Banda": "Banda", "Compor": "Componer", "Estúdio": "Estudio", "Lançar": "Lanzar", "Shows": "Conciertos", "Social": "Social", "Eventos": "Eventos", "Mercado IA": "Mercado IA", "Staff": "Staff", "Finanças": "Finanzas", "Turnês": "Giras", "Ranking": "Ranking", "Voltar": "Volver", "Salvar Agora": "Guardar ahora", "Continuar Último Save": "Continuar último guardado", "Salvar Perfil": "Guardar perfil", "Criar/Editar Banda": "Crear/editar banda", "Continuar": "Continuar", "Voltar ao Lobby": "Volver al lobby", "Voltar ao RC": "Volver al RC", "Voltar ao Social": "Volver a Social", "Voltar aos Eventos": "Volver a Eventos", "Voltar aos Shows": "Volver a Conciertos", "Voltar à composição": "Volver a composición", "Voltar às Finanças": "Volver a finanzas", "Voltar às Turnês": "Volver a giras", "Voltar ao Estúdio": "Volver al estudio", "Voltar ao Lançamento": "Volver al lanzamiento", "Nome artístico": "Nombre artístico", "País": "País", "Cidade de origem": "Ciudad de origen", "Dificuldade": "Dificultad", "Normal": "Normal", "Realista": "Realista", "Lenda": "Leyenda", "Avatar do Artista": "Avatar del artista", "Identidade": "Identidad", "Progresso": "Progreso", "Reputação Local": "Reputación local", "Carismático": "Carismático", "Criativo": "Creativo", "Disciplinado": "Disciplinado", "Rebelde": "Rebelde", "Escolha seu avatar": "Elige tu avatar", "Sua identidade": "Tu identidad", "Modo inicial": "Modo inicial", "Criar nova banda": "Crear nueva banda", "Entrar em uma banda": "Entrar en una banda", "Identidade da banda": "Identidad de la banda", "Nome da banda": "Nombre de la banda", "Estilo musical": "Estilo musical", "Estilo principal": "Estilo principal", "Formação": "Formación", "Função": "Función", "Nome": "Nombre", "Vocalista": "Vocalista", "Guitarrista": "Guitarrista", "Baixista": "Bajista", "Baterista": "Baterista", "Tecladista": "Tecladista", "DJ": "DJ", "Quarteto": "Cuarteto", "Trio": "Trío", "Duo": "Dúo", "Brasil": "Brasil", "Estados Unidos": "Estados Unidos", "Reino Unido": "Reino Unido", "Japão": "Japón", "Argentina": "Argentina", "Alemanha": "Alemania", "Próxima ação recomendada": "Próxima acción recomendada", "Contratar staff essencial": "Contratar staff esencial", "Siga o ciclo principal para evoluir a banda.": "Sigue el ciclo principal para evolucionar la banda.", "Ir para ação": "Ir a la acción", "Avançar semana": "Avanzar semana", "Ciclo da Carreira": "Ciclo de carrera", "Agenda": "Agenda", "E-mails": "Emails", "GERENCIAR": "GESTIONAR", "PRODUZIR": "PRODUCIR", "PROMOVER": "PROMOCIONAR", "PERFORMAR": "ACTUAR", "EVOLUIR": "EVOLUCIONAR", "Prontidão": "Preparación", "Próxima fase Estúdio": "Próxima fase Estudio", "Próxima fase Lançamento": "Próxima fase Lanzamiento", "Próxima fase Shows": "Próxima fase Conciertos", "Próxima fase: Lançamento": "Próxima fase: Lanzamiento", "Ir para Estúdio": "Ir al Estudio", "Ir para Shows": "Ir a Conciertos", "Jogar agora": "Jugar ahora", "Jogar": "Jugar", "Menu": "Menú", "Crie novas músicas": "Crea nuevas canciones", "Composição Musical": "Composición musical", "Música em criação": "Canción en creación", "Título": "Título", "Gênero": "Género", "Tema": "Tema", "BPM": "BPM", "Tom": "Tono", "Intensidade": "Intensidad", "Estrutura": "Estructura", "Letra / Direção": "Letra / Dirección", "Partes": "Partes", "Qualidade Final": "Calidad final", "Hit": "Hit", "Originalidade": "Originalidad", "Emoção": "Emoción", "Finalizar demo": "Finalizar demo", "Gerar ideia": "Generar idea", "Polir composição": "Pulir composición", "Biblioteca": "Biblioteca", "Demos finalizadas entram aqui e depois serão usadas no estúdio, lançamentos e shows.": "Las demos finalizadas aparecen aquí y luego se usan en el estudio, lanzamientos y conciertos.", "Pipeline Estúdio": "Pipeline de estudio", "Projetos": "Proyectos", "Direção sonora": "Dirección sonora", "Produtor": "Productor", "Orçamento extra": "Presupuesto extra", "Takes de gravação": "Tomas de grabación", "Mixagem": "Mezcla", "Masterização": "Masterización", "Gravar take": "Grabar toma", "Finalizar master": "Finalizar master", "Ajuste a produção antes de finalizar a master.": "Ajusta la producción antes de finalizar el master.", "Produção própria": "Producción propia", "Produtor Vintage Rock": "Productor Vintage Rock", "Produtor Radio Hit": "Productor Radio Hit", "Produtor Metal Arena": "Productor Metal Arena", "Equilibrado": "Equilibrado", "Equilibrada": "Equilibrada", "Cru e orgânico": "Crudo y orgánico", "Polido internacional": "Pulido internacional", "Cinemático ao vivo": "Cinemático en vivo", "Lançamento Musical": "Lanzamiento musical", "Formato": "Formato", "Plataforma foco": "Plataforma foco", "Janela": "Ventana", "Preço / Estratégia": "Precio / Estrategia", "Custo da campanha": "Costo de campaña", "Clipe / Conteúdo Visual": "Videoclip / Contenido visual", "PR / Imprensa": "PR / Prensa", "Publicar": "Publicar", "Auto campanha": "Auto campaña", "Masters Disponíveis": "Masters disponibles", "Previsão Comercial": "Previsión comercial", "Streams": "Streams", "Chart": "Lista", "Crítica": "Crítica", "Receita prevista": "Ingresos previstos", "Custo previsto": "Costo previsto", "Single": "Single", "EP": "EP", "Álbum": "Álbum", "Padrão": "Estándar", "Premium": "Premium", "Viral": "Viral", "Baixo custo viral": "Viral de bajo costo", "Premium de fã-base": "Premium de fanbase", "Show ao Vivo": "Concierto en vivo", "Preparar Show": "Preparar concierto", "Tipo de show": "Tipo de concierto", "Preço do ingresso": "Precio de entrada", "Produção / Luz / Palco": "Producción / Luces / Escenario", "Merch por fã": "Merch por fan", "Setlist": "Setlist", "Iniciar show": "Iniciar concierto", "Interagir": "Interactuar", "Crowd chant": "Canto del público", "Solo": "Solo", "Corrigir falha": "Corregir fallo", "Encore": "Bis", "Encerrar": "Finalizar", "Performance": "Performance", "Energia": "Energía", "Público": "Público", "Hype ao vivo": "Hype en vivo", "Risco técnico / Cena": "Riesgo técnico / Escena", "Bilheteria": "Taquilla", "Merch": "Merch", "Opening Act": "Opening Act", "Headliner": "Headliner", "Festival Slot": "Festival Slot", "Arena Special": "Arena Special", "Underground Club": "Club underground", "Theater Hall": "Teatro", "Festival Stage": "Escenario de festival", "Arena Gold": "Arena Gold", "Gerenciar Social": "Gestionar social", "Tipo de ação": "Tipo de acción", "Tom da comunicação": "Tono de comunicación", "Investimento em impulsionamento": "Inversión en impulso", "Publicar ação": "Publicar acción", "Escolha uma ação para movimentar a base de fãs.": "Elige una acción para mover la base de fans.", "Alcance": "Alcance", "Viralização": "Viralización", "Comentários dos fãs": "Comentarios de fans", "Histórico Social": "Historial social", "Post de bastidor": "Post de backstage", "Teaser de música": "Teaser de canción", "Anúncio de show": "Anuncio de concierto", "Live com fãs": "Directo con fans", "Entrevista polêmica": "Entrevista polémica", "Autêntico": "Auténtico", "Comercial agressiva": "Comercial agresiva", "Controle de crise": "Control de crisis", "Silencioso": "Silencioso", "Economia / Contratos": "Economía / Contratos", "Controle Financeiro": "Control financiero", "Caixa": "Caja", "Receita mensal": "Ingresos mensuales", "Despesas mensais": "Gastos mensuales", "Saldo previsto": "Saldo previsto", "Saúde Comercial": "Salud comercial", "Simular mês financeiro": "Simular mes financiero", "Gravadoras / Distribuição": "Discográficas / Distribución", "Patrocinadores": "Patrocinadores", "Contratos Ativos": "Contratos activos", "Histórico Financeiro": "Historial financiero", "Simular mês": "Simular mes", "Receita bruta prevista": "Ingresos brutos previstos", "Custo / Lucro": "Costo / Beneficio", "Royalties Dinâmicos": "Royalties dinámicos", "Camisetas de turne": "Camisetas de gira", "Jaquetas premium": "Chaquetas premium", "Vinil colecionador": "Vinilo coleccionista", "Pacote VIP backstage": "Paquete VIP backstage", "Turnês Internacionais": "Giras internacionales", "Plano de Turnê": "Plan de gira", "Região-alvo": "Región objetivo", "Transporte": "Transporte", "Equipe de estrada": "Equipo de gira", "Executar turnê": "Ejecutar gira", "Descansar equipe": "Descansar equipo", "Prontidão Global": "Preparación global", "Hype internacional": "Hype internacional", "Custo logístico": "Costo logístico", "Risco logístico": "Riesgo logístico", "Fadiga Dinâmica": "Fatiga dinámica", "Rotas Disponíveis": "Rutas disponibles", "Diário da Turnê": "Diario de gira", "América Latina": "América Latina", "Global": "Global", "Van independente": "Van independiente", "Ônibus noturno econômico": "Bus nocturno económico", "Tour bus profissional": "Tour bus profesional", "Jato / voos premium": "Jet / vuelos premium", "Equipe enxuta": "Equipo reducido", "Equipe equilibrada": "Equipo equilibrado", "Equipe premium": "Equipo premium", "Rotas Modulares": "Rutas modulares", "Eventos Dinâmicos": "Eventos dinámicos", "Novo evento": "Nuevo evento", "Tom da resposta": "Tono de respuesta", "Gerar repercussão": "Generar repercusión", "Resolver evento": "Resolver evento", "Próximo Evento": "Próximo evento", "Escolhas Disponíveis": "Opciones disponibles", "Resultado previsto": "Resultado previsto", "Histórico Narrativo": "Historial narrativo", "Oportunidade": "Oportunidad", "Feriado internacional": "Feriado internacional", "Semana de festival": "Semana de festival", "IA de Mercado Musical": "IA de mercado musical", "Mercado Global": "Mercado global", "Estratégia": "Estrategia", "Simular semana de mercado": "Simular semana de mercado", "Tendências globais": "Tendencias globales", "Bandas rivais": "Bandas rivales", "Imprensa Reativa": "Prensa reactiva", "Previsão da IA": "Previsión de IA", "Pressão dos rivais 0": "Presión de rivales 0", "Risco de mercado 0": "Riesgo de mercado 0", "Chance de chart 0": "Chance de lista 0", "Gêneros em alta": "Géneros en tendencia", "QA Comercial / Anti-Quebra": "QA Comercial / Anti-rotura", "QA Score": "Puntuación QA", "Rodar QA agora": "Ejecutar QA ahora", "Limpar log": "Limpiar log", "Moderação Anti-quebra": "Moderación anti-rotura", "Teste automático": "Prueba automática", "Forçar tela cheia": "Forzar pantalla completa", "Modo mobile horizontal": "Modo móvil horizontal", "Resetar save local": "Reiniciar guardado local", "Backup de save JSON": "Backup de guardado JSON", "Exportar backup do save": "Exportar backup del guardado", "Exportar save": "Exportar guardado", "Checklist da build": "Checklist de build", "Checklist para venda": "Checklist para venta", "Próximas pendências comerciais": "Próximas pendientes comerciales", "Release Candidate AAA": "Release Candidate AAA", "RC Score": "Puntuación RC", "Polimento aplicado": "Pulido aplicado", "Loading cinematográfico ON": "Loading cinematográfico ON", "Tutorial inicial ON": "Tutorial inicial ON", "Áudio de interface ON": "Audio de interfaz ON", "Microinterações de botão ON": "Microinteracciones de botón ON", "Balanceamento semanal RC": "Balance semanal RC", "Build web jogável em PC OK": "Build web jugable en PC OK", "Revisão humana PT/EN/ES Pendente": "Revisión humana PT/EN/ES pendiente", "Testar em Android real Pendente": "Probar en Android real pendiente", "Testar em iPhone/iPad real Pendente": "Probar en iPhone/iPad real pendiente", "Trocar placeholders por artes oficiais Pendente": "Cambiar placeholders por artes oficiales pendiente", "Onboarding Internacional": "Onboarding internacional", "Primeira hora de jogo": "Primera hora de juego", "Missões guiadas": "Misiones guiadas", "Recompensas iniciais": "Recompensas iniciales", "Exportar plano UX": "Exportar plan UX", "Resetar tutorial": "Reiniciar tutorial", "Resgatar recompensa": "Canjear recompensa", "Abrir tutorial": "Abrir tutorial", "Ver tutorial": "Ver tutorial", "Roteiro comercial da primeira hora": "Guion comercial de la primera hora", "Clareza": "Claridad", "O jogador recebe uma sequência de missões simples para entender carreira, composição, estúdio, lançamento, social e show.": "El jugador recibe una secuencia de misiones simples para entender carrera, composición, estudio, lanzamiento, social y concierto.", "Componha, grave e lance sua primeira música.": "Compón, graba y lanza tu primera canción.", "Crie sua identidade e salve a carreira.": "Crea tu identidad y guarda la carrera.", "Monte setlist, faça shows e reinvista o dinheiro.": "Monta el setlist, haz conciertos y reinvierte el dinero.", "Ativo": "Activo", "Ligado": "Encendido", "Desligado": "Apagado", "Pendente": "Pendiente", "Pronta para resgate": "Lista para canjear", "Recompensa recebida": "Recompensa recibida", "Aprovado para testes externos": "Aprobado para pruebas externas", "Revisar pendências": "Revisar pendientes", "Sistema estavel.": "Sistema estable.", "Nenhum erro detectado. Sistema estavel.": "No se detectaron errores. Sistema estable.", "Salvo": "Guardado", "Autosave": "Autoguardado", "Novo jogo": "Nueva partida", "sem data": "sin fecha", "Semana": "Semana", "fãs": "fans", "Reputação:": "Reputación:", "Rock Alternativo": "Rock alternativo", "Alternative Rock": "Rock alternativo", "Rock": "Rock", "Metal": "Metal", "Indie": "Indie", "Punk": "Punk", "Hard Rock": "Hard Rock", "Alternative": "Alternative", "Pop Rock": "Pop Rock", "Progressive": "Progressive", "Experimental": "Experimental", "Underground fiel": "Underground fiel", "Fase Local": "Fase local", "Global Stream": "Global Stream", "Indie Radar": "Indie Radar", "Radio Network": "Radio Network", "ClipTube": "ClipTube", "Rádio/Streaming": "Radio/Streaming", "Feed / Social": "Feed / Social", "Viral / Social": "Viral / Social", "Reviews / Social": "Reviews / Social", "Autenticidade": "Autenticidad", "Prestígio crítico": "Prestigio crítico", "Lealdade dos fãs": "Lealtad de fans", "Fit patrocinador": "Fit patrocinador", "Negociação": "Negociación", "Produção": "Producción", "Scouting": "Scouting", "Marketing": "Marketing", "Logística": "Logística", "Estabilidade": "Estabilidad", "Sinergia": "Sinergia", "Moral": "Moral", "Ego médio": "Ego medio", "Força geral": "Fuerza general", "Estado da Banda": "Estado de la banda", "Banda completa": "Banda completa", "Contratados": "Contratados", "Sem staff contratado. A banda economiza dinheiro, mas perde velocidade comercial.": "Sin staff contratado. La banda ahorra dinero, pero pierde velocidad comercial.", "Um portal acusa a banda de soar comercial demais após o último lançamento.": "Um portal acusa a banda de soar comercial demais após o último lançamento.", "Encontra músicos raros, produtores e oportunidades internacionais.": "Encontra músicos raros, produtores e oportunidades internacionais.", "solidão na turnê": "solidão na turnê", "refrão": "refrão", "👥 12.450 fãs": "👥 12.450 fãs", "Lançamentos": "Lançamentos", "Rio de Janeiro": "Rio de Janeiro", "Conflitos Dinâmicos": "Conflitos Dinâmicos", "Preparación": "Preparación", "Nova Música": "Nova Música", "Lançar o primeiro single": "Lançar o primeiro single", "Vi o vídeo no feed e precisei procurar a banda.": "Vi o vídeo no feed e precisei procurar a banda.", "Reduz falhas de logística, fadiga e risco em viagens.": "Reduz falhas de logística, fadiga e risco em viagens.", "Produção detectou risco de falha em luz, PA ou troca de instrumentos. Use Corrigir falha se necessário.": "Produção detectou risco de falha em luz, PA ou troca de instrumentos. Use Corrigir falha se necessário.", " • Próximo passo: ": " • Próximo passo: ", "Aguardando scan --": "Aguardando scan --", "Lançar Música": "Lançar Música", "<p class=\"muted\">Nenhum lançamento publicado ainda. Publique uma master para abrir charts e reviews.</p>": "<p class=\"muted\">Nenhum lançamento publicado ainda. Publique uma master para abrir charts e reviews.</p>", "RC": "RC", "Lendário": "Lendário", "Refrão Arena Fire": "Refrão Arena Fire", "Folha mensal": "Folha mensal", "02": "02", "🇦🇷 Argentina": "🇦🇷 Argentina", "Produção do Show": "Produção do Show", "Sistema real de saves: até 5 slots, autosave, save manual, migração de versão e reset seguro.": "Sistema real de saves: até 5 slots, autosave, save manual, migração de versão e reset seguro.", "Gravadoras, sponsors e caixa": "Gravadoras, sponsors e caixa", "Leve a melhor música para gravação, mixagem e masterização.": "Leve a melhor música para gravação, mixagem e masterização.", "Fase 9: o mercado reage a lançamentos, shows, posts, entrevistas, virais e críticas. Este sistema alimenta fãs, hype, reputação e futuras propostas internacionais.": "Fase 9: o mercado reage a lançamentos, shows, posts, entrevistas, virais e críticas. Este sistema alimenta fãs, hype, reputação e futuras propostas internacionais.", "Rock Nation Festival: proposta recebida": "Rock Nation Festival: proposta recebida", "Am": "Am", "Riff • Verso • Refrão • Solo • Refrão Duplo": "Riff • Verso • Refrão • Solo • Refrão Duplo", "Acidente técnico no palco": "Acidente técnico no palco", "Equipe recuperou energia e reduziu risco logístico. Custo $ 18.000.": "Equipe recuperou energia e reduziu risco logístico. Custo $ 18.000.", "Elige género, BPM, tonalidad, intensidad y estructura.": "Elige género, BPM, tonalidad, intensidad y estructura.", "03": "03", "Escolha até 8 músicas. Lançamentos e masters têm mais força de público.": "Escolha até 8 músicas. Lançamentos e masters têm mais força de público.", "Fase 4: contrate profissionais, controle salários e transforme a banda em uma operação comercial internacional.": "Fase 4: contrate profissionais, controle salários e transforme a banda em uma operação comercial internacional.", "Produção Ativa": "Produção Ativa", "River Crow": "River Crow", "Fase 10: gravadoras, patrocinadores, royalties, merch, despesas mensais e saúde financeira da banda.": "Fase 10: gravadoras, patrocinadores, royalties, merch, despesas mensais e saúde financeira da banda.", "Diagnóstico anti-quebra ativo": "Diagnóstico anti-quebra ativo", "Grupos Oficiais": "Grupos Oficiais", "Anti-quebra ON": "Anti-quebra ON", "Modo móvil horizontal": "Modo móvil horizontal", "Lançamento: marketing, social, reviews e receita inicial.": "Lançamento: marketing, social, reviews e receita inicial.", "A plateia cantou o refrão sozinha. Vídeos começam a viralizar nas redes.": "A plateia cantou o refrão sozinha. Vídeos começam a viralizar nas redes.", "Boa para início de carreira, melhora propostas pequenas e agenda local.": "Boa para início de carreira, melhora propostas pequenas e agenda local.", "Caixa insuficiente para bancar esta produção. Reduza venue/produção ou lance músicas antes.": "Caixa insuficiente para bancar esta produção. Reduza venue/produção ou lance músicas antes.", "Versão visível": "Versão visível", "Auto setup": "Auto setup", "Contrate ao menos um produtor, empresário ou social media para acelerar a carreira.": "Contrate ao menos um produtor, empresário ou social media para acelerar a carreira.", "Salvar e voltar": "Salvar e voltar", "Band Legacy": "Band Legacy", "Tokyo": "Tokyo", "Conflitos, imprensa, prêmios e decisões": "Conflitos, imprensa, prêmios e decisões", "Complete missões curtas para entender o ciclo comercial: identidade, música, estúdio, lançamento, show e evolução semanal.": "Complete missões curtas para entender o ciclo comercial: identidade, música, estúdio, lançamento, show e evolução semanal.", "Pressão do patrocinador": "Pressão do patrocinador", "A faixa é promissora. Mais uma parte forte pode transformar a composição em single.": "A faixa é promissora. Mais uma parte forte pode transformar a composição em single.", "A estética dark premium está chamando atenção no circuito.": "A estética dark premium está chamando atenção no circuito.", "Inicializando diagnóstico...": "Inicializando diagnóstico...", "Criatividade": "Criatividade", "Fase 7: transforme masters em singles, EPs e álbuns. Escolha campanha, plataforma, preço e janela para disputar charts globais.": "Fase 7: transforme masters em singles, EPs e álbuns. Escolha campanha, plataforma, preço e janela para disputar charts globais.", "Mercado Dinâmico": "Mercado Dinâmico", "QA": "QA", "Sexta comum": "Sexta comum", "Caminhos e nomes finais": "Caminhos e nomes finais", "Editar Integrante": "Editar Integrante", "Identidade da Banda": "Identidade da Banda", "recomeço": "recomeço", "BL": "BL", "Intro • Verso • Refrão • Solo • Final": "Intro • Verso • Refrão • Solo • Final", "Compor primeira música": "Compor primeira música", "Fase 4: identidade integrada ao ciclo principal de carreira, com autosave, slots, migração e reset seguro.": "Fase 4: identidade integrada ao ciclo principal de carreira, com autosave, slots, migração e reset seguro.", "$ 0 / $ 0": "$ 0 / $ 0", "Histórico": "Histórico", "0%": "0%", "Ir para o jogo": "Ir para o jogo", "Solo incendiou o público e elevou a performance.": "Solo incendiou o público e elevou a performance.", "ZIP completo com código, dados e docs; assets oficiais podem ser externos, desde que os caminhos deste manifesto sejam mantidos.": "ZIP completo com código, dados e docs; assets oficiais podem ser externos, desde que os caminhos deste manifesto sejam mantidos.", "Prepare campanha, janela comercial, plataforma foco e preço.": "Prepare campanha, janela comercial, plataforma foco e preço.", "🇺🇸 Estados Unidos": "🇺🇸 Estados Unidos", "Tendências do mercado": "Tendências do mercado", "Caixa insuficiente. Faça shows ou grave singles antes de contratar esse profissional.": "Caixa insuficiente. Faça shows ou grave singles antes de contratar esse profissional.", "Os assets oficiais devem substituir os provisórios mantendo o mesmo caminho ou usando o nome final indicado no documento.": "Os assets oficiais devem substituir os provisórios mantendo o mesmo caminho ou usando o nome final indicado no documento.", "<p class=\"muted\">Histórico vazio. As campanhas sociais vão registrar crescimento e risco.</p>": "<p class=\"muted\">Histórico vazio. As campanhas sociais vão registrar crescimento e risco.</p>", "A banda está no início da estrada. O público percebe potencial, mas a identidade ainda precisa ser consolidada.": "A banda está no início da estrada. O público percebe potencial, mas a identidade ainda precisa ser consolidada.", "Fase 11: primeira hora guiada, objetivos iniciais, recompensas e experiência clara para jogadores novos em PT-BR, EN e ES.": "Fase 11: primeira hora guiada, objetivos iniciais, recompensas e experiência clara para jogadores novos em PT-BR, EN e ES.", "A ação pareceu natural e fortaleceu a comunidade.": "A ação pareceu natural e fortaleceu a comunidade.", "Pipeline Composição": "Pipeline Composição", "Fase 5: crie músicas combinando letra, riff, refrão, ponte, solo e mixagem. O sistema calcula qualidade, potencial de hit, originalidade e impacto emocional.": "Fase 5: crie músicas combinando letra, riff, refrão, ponte, solo e mixagem. O sistema calcula qualidade, potencial de hit, originalidade e impacto emocional.", "Auto show": "Auto show", "<p class=\"muted\">Sem comentários recentes. Publique uma ação social para gerar reação do público.</p>": "<p class=\"muted\">Sem comentários recentes. Publique uma ação social para gerar reação do público.</p>", "<p class=\"muted\">Nenhuma música finalizada ainda.</p>": "<p class=\"muted\">Nenhuma música finalizada ainda.</p>", "Monte a apresentação e prepare o palco.": "Monte a apresentação e prepare o palco.", "RockWave": "RockWave", "Save System": "Save System", "A campanha pode viralizar, mas há risco real de backlash. Ajuste tom, staff ou investimento.": "A campanha pode viralizar, mas há risco real de backlash. Ajuste tom, staff ou investimento.", "Assets obrigatórios verificados": "Assets obrigatórios verificados", "NA MÚSICA": "NA MÚSICA", "Crítica viral negativa": "Crítica viral negativa", "EN": "EN", "Rutas seguras, recuperación de guardado, verificación de assets, fallback de pantalla y registro local.": "Rutas seguras, recuperación de guardado, verificación de assets, fallback de pantalla y registro local.", "Vale Games • Band Legacy Release Candidate v1.1.0": "Vale Games • Band Legacy Release Candidate v1.1.0", "Discussão entre integrantes": "Discussão entre integrantes", "Singles, EPs, charts e hype": "Singles, EPs, charts e hype", "fé no palco": "fé no palco", "A música tem cheiro de single internacional. Invista em estúdio, marketing e lançamento forte.": "A música tem cheiro de single internacional. Invista em estúdio, marketing e lançamento forte.", "Recompensa possível": "Recompensa possível", "Escolha português do Brasil, inglês ou espanhol. A escolha fica salva no navegador.": "Escolha português do Brasil, inglês ou espanhol. A escolha fica salva no navegador.", "Monte a estrutura da música e finalize o primeiro rascunho.": "Monte a estrutura da música e finalize o primeiro rascunho.", "Salvar Integrante": "Salvar Integrante", "★ 7.850 XP": "★ 7.850 XP", "Selecione sala, produtor, direção sonora e finalize uma master.": "Selecione sala, produtor, direção sonora e finalize uma master.", "Continuar último guardado": "Continuar último guardado", "Charts": "Charts", "Estúdio e lançamentos": "Estúdio e lançamentos", "01": "01", "🇯🇵 Japão": "🇯🇵 Japão", "Fase 4: identidad integrada al ciclo principal de carrera, con autoguardado, ranuras, migración y reinicio seguro.": "Fase 4: identidad integrada al ciclo principal de carrera, con autoguardado, ranuras, migración y reinicio seguro.", "New York": "New York", "Prepare setlist, produção e interação com o público.": "Prepare setlist, produção e interação com o público.", "ES": "ES", "Equilíbrio entre custo, qualidade e agilidade para singles fortes.": "Equilíbrio entre custo, qualidade e agilidade para singles fortes.", "Equipe profissional forte. A carreira já pode buscar festivais, contratos e turnês maiores.": "Equipe profissional forte. A carreira já pode buscar festivais, contratos e turnês maiores.", "A": "A", "público latino intenso": "público latino intenso", "🇧🇷 Brasil": "🇧🇷 Brasil", "Caixa insuficiente para contratação": "Caixa insuficiente para contratação", "Elige portugués de Brasil, inglés o español. Tu elección queda guardada en el navegador.": "Elige portugués de Brasil, inglés o español. Tu elección queda guardada en el navegador.", "Status Interno": "Status Interno", "Overall": "Overall", "Heat": "Heat", "0": "0", "Alerta técnico": "Alerta técnico", "Risco de backlash": "Risco de backlash", "Fase 11: mapa de rotas, logística global, transporte, equipe de estrada, fadiga, risco e expansão mundial da banda.": "Fase 11: mapa de rotas, logística global, transporte, equipe de estrada, fadiga, risco e expansão mundial da banda.", "G": "G", "Dispositivo Anti-Quebra": "Dispositivo Anti-Quebra", "caos artístico": "caos artístico", "Reputación local": "Reputación local", "Exportação de backup disponível": "Exportação de backup disponível", "Eventos dinámicos": "Eventos dinámicos", "Áudio de interface": "Áudio de interface", "Aumenta presença de palco, moral e controle de conflitos.": "Aumenta presença de palco, moral e controle de conflitos.", "Grande alcance internacional, mas reduz liberdade artística.": "Grande alcance internacional, mas reduz liberdade artística.", "180 / 1.000 XP": "180 / 1.000 XP", "A campanha foi intensa e parte do público reagiu mal.": "A campanha foi intensa e parte do público reagiu mal.", "Gravar master no estúdio": "Gravar master no estúdio", "Atenção: despesas superam receitas. Negocie patrocínio, reduza custos ou lance conteúdo.": "Atenção: despesas superam receitas. Negocie patrocínio, reduza custos ou lance conteúdo.", "Contrate equipe": "Contrate equipe", "Qualidade": "Qualidade", "Carregando análise financeira...": "Carregando análise financeira...", "Semana vazia": "Semana vazia", "Resultado da Produção": "Resultado da Produção", "Um patrocinador quer influenciar figurino e setlist para aumentar exposição de marca.": "Um patrocinador quer influenciar figurino e setlist para aumentar exposição de marca.", "Campanha segura para fortalecer fãs e preparar o próximo passo da carreira.": "Campanha segura para fortalecer fãs e preparar o próximo passo da carreira.", "Fase 9: validação técnica para venda internacional, teste de navegação, saves, idioma, assets e responsividade antes da troca final dos assets oficiais.": "Fase 9: validação técnica para venda internacional, teste de navegação, saves, idioma, assets e responsividade antes da troca final dos assets oficiais.", "Provisória": "Provisória", "Produção cara, som internacional e grande potencial para álbum ou single mundial.": "Produção cara, som internacional e grande potencial para álbum ou single mundial.", "Foco de merch": "Foco de merch", "Ásia": "Ásia", "Versão visível sincronizada": "Versão visível sincronizada", "Completa misiones cortas para aprender el ciclo comercial: identidad, música, estudio, lanzamiento, show y progresión semanal.": "Completa misiones cortas para aprender el ciclo comercial: identidad, música, estudio, lanzamiento, show y progresión semanal.", "Risco": "Risco", "Semana 1": "Semana 1", "América do Norte": "América do Norte", "Vitória narrativa": "Vitória narrativa", "Avançar a carreira": "Avançar a carreira", "Produção arriscada: faltam orçamento, staff ou estúdio melhor. O anti-quebra vai impedir travamento, mas a carreira pode sofrer.": "Produção arriscada: faltam orçamento, staff ou estúdio melhor. O anti-quebra vai impedir travamento, mas a carreira pode sofrer.", "Caça-talentos": "Caça-talentos", "Rutas, logística y fans globales": "Rutas, logística y fans globales", "Slots de save disponíveis": "Slots de save disponíveis", "Gerar NPC": "Gerar NPC", "São Paulo/SP": "São Paulo/SP", "Assets Trocáveis": "Assets Trocáveis", "Bm": "Bm", "Empresária": "Empresária", "<p class=\"muted\">Histórico vazio. O primeiro show vai registrar resultado, lucro e crescimento de fãs.</p>": "<p class=\"muted\">Histórico vazio. O primeiro show vai registrar resultado, lucro e crescimento de fãs.</p>", "Improviso arriscado perdeu precisão, mas o show continuou seguro.": "Improviso arriscado perdeu precisão, mas o show continuou seguro.", "🇩🇪 Alemanha": "🇩🇪 Alemanha", "Próxima acción recomendada": "Próxima acción recomendada", "Eleva qualidade de gravação, mix e potencial de hit no estúdio.": "Eleva qualidade de gravação, mix e potencial de hit no estúdio.", "BAND": "BAND", "Interação com o público": "Interação com o público", "Casas médias buscam artistas com presença forte em vídeo curto e bastidores.": "Casas médias buscam artistas com presença forte em vídeo curto e bastidores.", "0% / local": "0% / local", "Dm": "Dm", "campanha ainda precisa de força": "campanha ainda precisa de força", "12 / 100": "12 / 100", "PT-BR": "PT-BR", "Algoritmo Ativo": "Algoritmo Ativo", "04": "04", "Campanha": "Campanha", "Fase 6: setlist, cidade, tipo de show, produção, falhas técnicas, crowd chant, encore, bilheteria, merch, fãs e reputação.": "Fase 6: setlist, cidade, tipo de show, produção, falhas técnicas, crowd chant, encore, bilheteria, merch, fãs e reputação.", "aumenta caixa, mas pressiona identidade artística.": "aumenta caixa, mas pressiona identidade artística.", "Aumenta hype, redes sociais e alcance de lançamentos.": "Aumenta hype, redes sociais e alcance de lançamentos.", "Assets Provisórios": "Assets Provisórios", "Escolha partes para formar uma música com identidade forte.": "Escolha partes para formar uma música com identidade forte.", "Clipe curto vertical": "Clipe curto vertical", "Hype, fãs, viralização e reputação": "Hype, fãs, viralização e reputação", "Em": "Em", "Runway": "Runway", "Fase 6: grave demos, escolha sala, ajuste takes, mixagem e masterização para transformar composições em masters comerciais.": "Fase 6: grave demos, escolha sala, ajuste takes, mixagem e masterização para transformar composições em masters comerciais.", "Fase 12: conflitos internos, entrevistas, escândalos, premiações, escolhas narrativas e consequências reais na carreira.": "Fase 12: conflitos internos, entrevistas, escândalos, premiações, escolhas narrativas e consequências reais na carreira.", "F#m": "F#m", "Asset Pipeline Comercial": "Asset Pipeline Comercial", "Projeto em produção. Ajuste takes, mix, master e sala para equilibrar custo, qualidade e autenticidade.": "Projeto em produção. Ajuste takes, mix, master e sala para equilibrar custo, qualidade e autenticidade.", "Um equipamento falha durante a passagem de som e a equipe precisa agir rápido.": "Um equipamento falha durante a passagem de som e a equipe precisa agir rápido.", "D": "D", "Caixa insuficiente para finalizar a master. Reduza orçamento/sala ou faça shows primeiro.": "Caixa insuficiente para finalizar a master. Reduza orçamento/sala ou faça shows primeiro.", "Masters Finalizadas": "Masters Finalizadas", "↻": "↻", "Estas faixas irão alimentar lançamentos, charts, shows e turnês nas próximas fases.": "Estas faixas irão alimentar lançamentos, charts, shows e turnês nas próximas fases.", "Premiação": "Premiação", "<span class=\"release-badge\">PROVISÓRIA</span>": "<span class=\"release-badge\">PROVISÓRIA</span>", "Equipe ajustou retorno, luz e troca de instrumentos antes do público perceber.": "Equipe ajustou retorno, luz e troca de instrumentos antes do público perceber.", "Hype, fans, viralización y reputación": "Hype, fans, viralización y reputación", "Profissional": "Profissional", "🇬🇧 Reino Unido": "🇬🇧 Reino Unido", "25 MAI — Show RJ": "25 MAI — Show RJ", "Gira el móvil": "Gira el móvil", "Salvar Banda": "Salvar Banda", "Lançamentos publicados alimentam reputação, fãs, agenda de shows e rankings internacionais nas próximas fases.": "Lançamentos publicados alimentam reputação, fãs, agenda de shows e rankings internacionais nas próximas fases.", "Defina artista, país, cidade e nome da banda.": "Defina artista, país, cidade e nome da banda.", "A ideia ainda parece crua. Combine riff, refrão, letra e emoção antes de gravar.": "A ideia ainda parece crua. Combine riff, refrão, letra e emoção antes de gravar.", "Campanha Social": "Campanha Social", "Fase 10: mapa de caminhos oficiais, troca segura de placeholders, validação visual e exportação do manifesto para criação dos assets definitivos.": "Fase 10: mapa de caminhos oficiais, troca segura de placeholders, validação visual e exportação do manifesto para criação dos assets definitivos.", "PT-BR / EN / ES": "PT-BR / EN / ES", "Cidade": "Cidade", "Nível 1": "Nível 1", "Contrato interno Ativo": "Contrato interno Ativo", "Estúdio: sala, produtor, takes, mix e master.": "Estúdio: sala, produtor, takes, mix e master.", "2026 Global Rock Cycle": "2026 Global Rock Cycle", "Sons curtos de toque, sucesso e navegação. O navegador só libera áudio após o primeiro toque do usuário.": "Sons curtos de toque, sucesso e navegação. O navegador só libera áudio após o primeiro toque do usuário.", "Créditos": "Créditos", "gera prestígio, mas risco comercial alto": "gera prestígio, mas risco comercial alto", "Pré-Refrão": "Pré-Refrão", "05": "05", "Crítico indie": "Crítico indie", "cresce com crítica e viral orgânico": "cresce com crítica e viral orgânico", "Tendências, rivais, charts e regiões": "Tendências, rivais, charts e regiões", "Aumente hype e alcance antes do próximo show.": "Aumente hype e alcance antes do próximo show.", "Substituir assets provisórios por artes oficiais, revisar 100% dos textos narrativos em três idiomas, testar em aparelhos reais Android/iOS e preparar página de venda internacional.": "Substituir assets provisórios por artes oficiais, revisar 100% dos textos narrativos em três idiomas, testar em aparelhos reais Android/iOS e preparar página de venda internacional.", "Caixa insuficiente para publicar com esta campanha. Reduza marketing ou faça shows primeiro.": "Caixa insuficiente para publicar com esta campanha. Reduza marketing ou faça shows primeiro.", "Publique a master com campanha de marketing para gerar fãs e hype.": "Publique a master com campanha de marketing para gerar fãs e hype.", "Define artista, país, ciudad y nombre de la banda.": "Define artista, país, ciudad y nombre de la banda.", "América do Sul": "América do Sul", "cidade de mídia e festival": "cidade de mídia e festival", "Aguardando execução --": "Aguardando execução --", "Lanzar música": "Lanzar música", "Fãs começaram uma campanha para colocar a banda em um festival grande.": "Fãs começaram uma campanha para colocar a banda em um festival grande.", "fãs fiéis e merch forte": "fãs fiéis e merch forte", "v1.3.1_20260522_1948": "v1.3.1_20260522_1948", "Rotas, logística e fãs globais": "Rotas, logística e fãs globais", "Fullscreen horizontal, orientação mobile, escala do HUD, áudio, idioma e performance foram organizados para a versão internacional.": "Fullscreen horizontal, orientação mobile, escala do HUD, áudio, idioma e performance foram organizados para a versão internacional.", "Evoluir reputação da banda": "Evoluir reputação da banda", "Selecione uma master finalizada e prepare o lançamento comercial.": "Selecione uma master finalizada e prepare o lançamento comercial.", "Campanha espontânea de fãs": "Campanha espontânea de fãs", " Refrão mais memorável, ponte emocional e assinatura da banda reforçada.": " Refrão mais memorável, ponte emocional e assinatura da banda reforçada.", "Pipeline Lançamento": "Pipeline Lançamento", "Falha técnica controlada": "Falha técnica controlada", "Boa presença digital. Pode virar convite para palco maior.": "Boa presença digital. Pode virar convite para palco maior.", "Reputação: Lendária": "Reputação: Lendária", "Produza suas músicas": "Produza suas músicas", "<p class=\"muted\">Nenhuma master finalizada ainda. Grave uma demo no estúdio.</p>": "<p class=\"muted\">Nenhuma master finalizada ainda. Grave uma demo no estúdio.</p>", "Composição do primeiro single com escolhas musicais claras.": "Composição do primeiro single com escolhas musicais claras.", "Show em Tempo Real": "Show em Tempo Real", "Hype": "Hype", "Sistema real de guardado: hasta 5 ranuras, autoguardado, guardado manual, migración de versión y reinicio seguro.": "Sistema real de guardado: hasta 5 ranuras, autoguardado, guardado manual, migración de versión y reinicio seguro.", "Patrocínio": "Patrocínio", "Carregando evento narrativo...": "Carregando evento narrativo...", "Catálogo Público": "Catálogo Público", "$ 2.350.500": "$ 2.350.500", "Impacto previsto": "Impacto previsto", "Som de lançamento internacional. Esta master já pode sustentar campanha forte e turnê.": "Som de lançamento internacional. Esta master já pode sustentar campanha forte e turnê.", "Carregando plano internacional...": "Carregando plano internacional...", "02 JUN — Rock Nation Festival": "02 JUN — Rock Nation Festival", "Estúdio Indie Pro": "Estúdio Indie Pro", "Prontidão 0%": "Prontidão 0%", "LEGACY": "LEGACY", "Band Legacy fue diseñado para jugar en pantalla completa horizontal. Gira el dispositivo, toca activar y mantén el móvil en horizontal.": "Band Legacy fue diseñado para jugar en pantalla completa horizontal. Gira el dispositivo, toca activar y mantén el móvil en horizontal.", "São Paulo": "São Paulo", "Prêmios Progressivos": "Prêmios Progressivos", "Buenos Aires": "Buenos Aires", "fãs estão movimentando a prévia": "fãs estão movimentando a prévia", "68": "68", "Português do Brasil": "Português do Brasil", "Impacto do Staff": "Impacto do Staff", "A IA prevê alta chance de viralização. Boa janela para lançar clipe, show ou single.": "A IA prevê alta chance de viralização. Boa janela para lançar clipe, show ou single.", "Atmosfera • Crescendo • Explosão • Encore": "Atmosfera • Crescendo • Explosão • Encore", "Bebida energética": "Bebida energética", "Risco de conflito Baixo": "Risco de conflito Baixo", "Botões navegáveis detectados": "Botões navegáveis detectados", "Um jornalista pergunta se a banda está preparada para uma turnê maior depois do crescimento recente.": "Um jornalista pergunta se a banda está preparada para uma turnê maior depois do crescimento recente.", "Lobby": "Lobby", "Volte ao lobby, avance a semana e leia o log de evolução.": "Volte ao lobby, avance a semana e leia o log de evolução.", "Ajuste formação, staff, lançamentos e shows até alcançar novo marco.": "Ajuste formação, staff, lançamentos e shows até alcançar novo marco.", "O público precisa de mais energia ou interação antes do bis.": "O público precisa de mais energia ou interação antes do bis.", "Ir a la acción": "Ir a la acción", "Atualização automática": "Atualização automática", "IA de Público e Social Media": "IA de Público e Social Media", "Español": "Español", "mercado internacional crítico": "mercado internacional crítico", "Monte a identidade da sua banda, ajuste a formação e acompanhe sinergia, ego, moral e evolução dos integrantes.": "Monte a identidade da sua banda, ajuste a formação e acompanhe sinergia, ego, moral e evolução dos integrantes.", "Tendência: rock cinematográfico": "Tendência: rock cinematográfico", "Selecciona sala, productor, dirección sonora y termina una master.": "Selecciona sala, productor, dirección sonora y termina una master.", "Lançar música": "Lançar música", "Bis explosivo fechou a noite com sensação de show histórico.": "Bis explosivo fechou a noite com sensação de show histórico.", "Rotas seguras, recuperação de save, verificação de assets, fallback de tela e log local.": "Rotas seguras, recuperação de save, verificação de assets, fallback de tela e log local.", "Rise. Perform. Become a Legend.": "Rise. Perform. Become a Legend.", "O público está respondendo bem a bandas com visual dark premium e shows imersivos.": "O público está respondendo bem a bandas com visual dark premium e shows imersivos.", "C": "C", "O ciclo principal está ativo: gerenciar, produzir, promover, performar e evoluir.": "O ciclo principal está ativo: gerenciar, produzir, promover, performar e evoluir.", "Comentário dividido": "Comentário dividido", "Asset Score": "Asset Score", "Resumo do Manifesto": "Resumo do Manifesto", "Emocional": "Emocional", "crítica internacional está impressionada": "crítica internacional está impressionada", "Monta setlist, controla energía, resuelve fallas y termina el show.": "Monta setlist, controla energía, resuelve fallas y termina el show.", "Resultado técnico": "Resultado técnico", "Lisboa": "Lisboa", "Agende shows e turnês": "Agende shows e turnês", "Live Session": "Live Session", "superação": "superação", "Show ao vivo, setlist, público, merch e avanço de semana.": "Show ao vivo, setlist, público, merch e avanço de semana.", "Não ativo": "Não ativo", "Local": "Local", "Cada ação influencia reputação, público dos shows, resultados de lançamentos e convites futuros.": "Cada ação influencia reputação, público dos shows, resultados de lançamentos e convites futuros.", "Risco público": "Risco público", "Fase 8: polimento final, tutorial, áudio de UI, loading, balanceamento, checklist de venda e documentação para build internacional.": "Fase 8: polimento final, tutorial, áudio de UI, loading, balanceamento, checklist de venda e documentação para build internacional.", "Gravar Estúdio": "Gravar Estúdio", "$ 0": "$ 0", "Lançamento": "Lançamento", "Backgrounds --": "Backgrounds --", "Exportar manifesto": "Exportar manifesto", "úmido": "úmido", "Intro • Verso • Pré-Refrão • Refrão • Ponte • Refrão": "Intro • Verso • Pré-Refrão • Refrão • Ponte • Refrão", "Mobile Landscape": "Mobile Landscape", "Rodar scan de assets": "Rodar scan de assets", "Reputación:": "Reputación:", "English": "English", "v0.3": "v0.3", "Nombre artístico": "Nombre artístico", "O guitarrista quer mais destaque nos solos e ameaça expor a tensão nas redes.": "O guitarrista quer mais destaque nos solos e ameaça expor a tensão nas redes.", "Fã antigo": "Fã antigo", "Rock Alternativo • Brasil • São Paulo/SP": "Rock Alternativo • Brasil • São Paulo/SP", "Operação saudável: a banda pode investir em produção, shows e marketing.": "Operação saudável: a banda pode investir em produção, shows e marketing."}};
Object.assign(I18N['en-US'].map, PHASE12_LOCALIZATION['en-US']);
Object.assign(I18N['es-ES'].map, PHASE12_LOCALIZATION['es-ES']);
const LOCALIZATION_CATALOG_STATS = { version: BUILD_VERSION, totalStrings: 724, languages: SUPPORTED_LANGUAGES, dynamicDomains: ['ui','onboarding','save','studio','release','live','social','economy','events','market','tour','qa'] };

function getLanguage() {
  const stored = SafeStore.get(LANG_KEY, 'pt-BR');
  return SUPPORTED_LANGUAGES.includes(stored) ? stored : 'pt-BR';
}

function tr(text) {
  if (text && typeof text === 'object') return text[currentLanguage] || text['pt-BR'] || Object.values(text)[0] || '';
  const clean = String(text ?? '').trim();
  if (!clean || currentLanguage === 'pt-BR') return text;
  const translated = I18N[currentLanguage]?.map?.[clean];
  if (!translated && clean.length > 1) reportLocalizationMissing(clean);
  return translated || text;
}

function reportLocalizationMissing(key) {
  try {
    const list = JSON.parse(localStorage.getItem('bandLegacy:i18nMissing') || '[]');
    if (!list.includes(key)) list.push(key);
    localStorage.setItem('bandLegacy:i18nMissing', JSON.stringify(list.slice(-200)));
  } catch (_) {}
}

function getLocalizationMissing() {
  try { return JSON.parse(localStorage.getItem('bandLegacy:i18nMissing') || '[]'); } catch (_) { return []; }
}

function formatNumberLocalized(n) {
  try { return Number(n || 0).toLocaleString(I18N[currentLanguage]?.locale || 'pt-BR'); } catch (_) { return String(n); }
}

function formatCurrencyLocalized(n) {
  const locale = I18N[currentLanguage]?.locale || 'pt-BR';
  const currency = currentLanguage === 'pt-BR' ? 'BRL' : 'USD';
  try { return Number(n || 0).toLocaleString(locale, { style:'currency', currency, maximumFractionDigits:0 }); } catch (_) { return '$ ' + Number(n || 0).toFixed(0); }
}

function applyI18n(root = document) {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dataset.lang = currentLanguage;
  const selector = 'h1,h2,h3,p,button,label,small,span,strong,em,option,div.logo-top,div.logo-bottom';
  $$(selector, root).forEach(el => {
    if (el.children.length) return;
    if (!el.dataset.i18nSource) el.dataset.i18nSource = el.textContent.trim();
    const source = el.dataset.i18nSource;
    const translated = tr(source);
    if (translated !== el.textContent) el.textContent = translated;
  });
  const top = $('#languageSelect');
  const settings = $('#settingsLanguageSelect');
  if (top) top.value = currentLanguage;
  if (settings) settings.value = currentLanguage;
}

function setLanguage(lang) {
  currentLanguage = SUPPORTED_LANGUAGES.includes(lang) ? lang : 'pt-BR';
  SafeStore.set(LANG_KEY, currentLanguage);
  applyI18n();
  renderCoreGameplay();
  updateDiagnosticsPanel();
  renderLocalizationQA();
}


function reportIssue(code, err, context = {}) {
  const issue = { code, message: err?.message || String(err), context, at: new Date().toISOString() };
  diagnostics.push(issue);
  console.warn('[BandLegacy AntiBreak]', issue);
  try { localStorage.setItem('bandLegacy:diagnostics', JSON.stringify(diagnostics.slice(-30))); } catch (_) {}
  updateDiagnosticsPanel();
}

function updateDiagnosticsPanel() {
  const panel = $('#diagnosticsLog');
  if (!panel) return;
  const latest = diagnostics.slice(-6).map(i => `${i.code}: ${i.message}`).join('\n');
  panel.textContent = latest || tr('Nenhum erro detectado. Sistema estavel.');
}

window.addEventListener('error', event => reportIssue('WINDOW_ERROR', event.error || event.message));
window.addEventListener('unhandledrejection', event => reportIssue('PROMISE_REJECTION', event.reason));

function requestFullscreen() {
  const el = document.documentElement;
  try {
    if (!document.fullscreenElement && el.requestFullscreen) el.requestFullscreen().catch(err => reportIssue('FULLSCREEN_DENIED', err));
    if (screen.orientation?.lock) screen.orientation.lock('landscape').catch(err => reportIssue('ORIENTATION_LOCK_DENIED', err));
  } catch (err) { reportIssue('FULLSCREEN_RECOVERED', err); }
}

function checkOrientation() {
  const isPortrait = window.innerHeight > window.innerWidth;
  const isMobile = window.innerWidth < 900 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  document.body.classList.toggle('is-portrait', isPortrait && isMobile);
  document.body.classList.toggle('is-landscape', !isPortrait);
  document.body.classList.toggle('is-mobile-device', isMobile);
  document.body.classList.toggle('is-fullscreen', Boolean(document.fullscreenElement));
}

function createDefaultMembers() {
  return [
    { name: 'River Crow', role: 'Vocalista', technique: 66, creativity: 78, stagePresence: 82, stamina: 70, ego: 44, loyalty: 88, morale: 74 },
    { name: 'Maya Stone', role: 'Guitarrista', technique: 72, creativity: 70, stagePresence: 63, stamina: 67, ego: 52, loyalty: 73, morale: 71 },
    { name: 'Leo Bass', role: 'Baixista', technique: 61, creativity: 58, stagePresence: 57, stamina: 76, ego: 32, loyalty: 81, morale: 75 },
    { name: 'Axel Drums', role: 'Baterista', technique: 70, creativity: 62, stagePresence: 69, stamina: 84, ego: 49, loyalty: 68, morale: 66 }
  ];
}


function createStaffMarket() {
  return [
    { id:'manager_01', name:'Helena Cross', role:'Empresária', tier:'Bronze', salary:12000, signing:25000, negotiation:62, marketing:58, production:36, logistics:48, scouting:42, morale:50, hired:false, description:'Boa para início de carreira, melhora propostas pequenas e agenda local.' },
    { id:'producer_01', name:'Marco Vale', role:'Produtor Musical', tier:'Prata', salary:18500, signing:42000, negotiation:38, marketing:44, production:76, logistics:40, scouting:35, morale:52, hired:false, description:'Eleva qualidade de gravação, mix e potencial de hit no estúdio.' },
    { id:'road_01', name:'Tina Roadcase', role:'Tour Manager', tier:'Prata', salary:16000, signing:35000, negotiation:45, marketing:40, production:35, logistics:82, scouting:38, morale:55, hired:false, description:'Reduz falhas de logística, fadiga e risco em viagens.' },
    { id:'press_01', name:'Noah Sparks', role:'Marketing/PR', tier:'Bronze', salary:14000, signing:30000, negotiation:48, marketing:79, production:30, logistics:33, scouting:45, morale:47, hired:false, description:'Aumenta hype, redes sociais e alcance de lançamentos.' },
    { id:'scout_01', name:'Akira Stone', role:'Caça-talentos', tier:'Ouro', salary:26000, signing:75000, negotiation:52, marketing:46, production:41, logistics:39, scouting:91, morale:51, hired:false, description:'Encontra músicos raros, produtores e oportunidades internacionais.' },
    { id:'coach_01', name:'Vera Night', role:'Coach de Palco', tier:'Prata', salary:17000, signing:38000, negotiation:32, marketing:50, production:43, logistics:35, scouting:41, morale:84, hired:false, description:'Aumenta presença de palco, moral e controle de conflitos.' }
  ];
}

function createCompositionTemplates() {
  return [
    { id:'riff_dirty_gold', name:'Riff Dirty Gold', type:'riff', genre:'Hard Rock', difficulty:32, energy:78, commercial:58, originality:54, emotion:42 },
    { id:'chorus_arena_fire', name:'Refrão Arena Fire', type:'refrão', genre:'Rock Alternativo', difficulty:48, energy:64, commercial:84, originality:48, emotion:72 },
    { id:'bridge_midnight', name:'Ponte Midnight Road', type:'ponte', genre:'Indie', difficulty:40, energy:45, commercial:52, originality:76, emotion:81 },
    { id:'solo_neon_storm', name:'Solo Neon Storm', type:'solo', genre:'Metal', difficulty:67, energy:89, commercial:41, originality:82, emotion:54 },
    { id:'lyric_backstage', name:'Letra Backstage Confession', type:'letra', genre:'Alternative', difficulty:36, energy:38, commercial:61, originality:70, emotion:88 },
    { id:'mix_radio_cut', name:'Mix Radio Cut', type:'mixagem', genre:'Pop Rock', difficulty:28, energy:52, commercial:91, originality:31, emotion:44 },
    { id:'intro_cinematic_fog', name:'Intro Cinematic Fog', type:'intro', genre:'Arena Rock', difficulty:34, energy:44, commercial:64, originality:78, emotion:86 },
    { id:'outro_crowd_chant', name:'Final Crowd Chant', type:'final', genre:'Rock', difficulty:46, energy:83, commercial:76, originality:62, emotion:79 }
  ];
}

function createCompositionState() {
  return {
    activeSong: { title:'Last Stage Lights', genre:'Rock Alternativo', theme:'superação', bpm:128, key:'Em', intensity:68, structure:'Intro • Verso • Refrão • Solo • Final', lyric:'Letra sobre superar a noite, vencer o medo e tocar para uma arena lotada.', parts:['riff_dirty_gold','chorus_arena_fire'], takes:1, budget:25000 },
    library: [],
    templates: createCompositionTemplates(),
    inspiration: 62,
    studioFocus: 'equilibrado',
    lastResult: null
  };
}


function createStudioState() {
  return {
    activeProjectIndex: 0,
    selectedRoom: 'indie_room',
    selectedProducer: 'internal',
    sonicDirection: 'balanced',
    takeHistory: [],
    takes: 1,
    mix: 45,
    master: 35,
    budget: 45000,
    risk: 18,
    releasedMasters: [],
    producers: [
      { id:'internal', name:'Produção própria', quality:42, radio:30, authenticity:70, risk:24, fee:0 },
      { id:'vintage', name:'Produtor Vintage Rock', quality:62, radio:44, authenticity:88, risk:18, fee:28000 },
      { id:'radio', name:'Produtor Radio Hit', quality:74, radio:90, authenticity:48, risk:22, fee:65000 },
      { id:'metal', name:'Produtor Metal Arena', quality:82, radio:62, authenticity:76, risk:16, fee:82000 }
    ],
    rooms: [
      { id:'garage_room', name:'Garagem Tratada', tier:'Inicial', cost:12000, vibe:72, quality:42, speed:80, risk:32, description:'Barata, crua e cheia de personalidade. Boa para demos punk, indie e rock sujo.' },
      { id:'indie_room', name:'Estúdio Indie Pro', tier:'Profissional', cost:45000, vibe:66, quality:68, speed:62, risk:18, description:'Equilíbrio entre custo, qualidade e agilidade para singles fortes.' },
      { id:'arena_room', name:'Arena Gold Studio', tier:'Premium', cost:125000, vibe:58, quality:91, speed:38, risk:10, description:'Produção cara, som internacional e grande potencial para álbum ou single mundial.' }
    ]
  };
}

function studioProjectCandidates(save) {
  const library = save?.composition?.library || [];
  if (library.length) return library;
  const scores = compositionScores(save);
  return [{ title: save?.composition?.activeSong?.title || 'Last Stage Lights', genre: save?.composition?.activeSong?.genre || 'Rock Alternativo', quality:scores.quality, hit:scores.hit, originality:scores.originality, emotion:scores.emotion, provisional:true }];
}

function studioScores(save) {
  const studio = save.studio || createStudioState();
  const candidates = studioProjectCandidates(save);
  const song = candidates[clamp(studio.activeProjectIndex,0,Math.max(0,candidates.length-1))] || candidates[0];
  const room = (studio.rooms || []).find(r => r.id === studio.selectedRoom) || createStudioState().rooms[1];
  const staff = staffImpact(save.staff || []);
  const band = bandStats(save);
  const takesBonus = clamp(studio.takes * 6, 0, 30);
  const mixBonus = clamp(studio.mix * .22, 0, 24);
  const masterBonus = clamp(studio.master * .24, 0, 26);
  const producer = (studio.producers || createStudioState().producers).find(p => p.id === studio.selectedProducer) || createStudioState().producers[0];
  const direction = studio.sonicDirection || 'balanced';
  const directionMod = { balanced:{q:4,r:4,a:4,risk:0}, raw:{q:0,r:-4,a:14,risk:3}, polished:{q:10,r:12,a:-6,risk:2}, cinematic:{q:8,r:6,a:10,risk:5} }[direction] || {q:4,r:4,a:4,risk:0};
  const staffBonus = clamp(staff.production * .18 + staff.staffPower * .08, 0, 24);
  const roomBonus = clamp(room.quality * .28 + room.vibe * .09, 0, 34);
  const budgetBonus = clamp((Number(studio.budget)||0) / 8500, 0, 18);
  const fatiguePenalty = clamp((studio.takes - 4) * 4, 0, 22);
  const finalQuality = clamp(Math.round((song.quality||50)*.40 + roomBonus + mixBonus + masterBonus + staffBonus + producer.quality*.16 + directionMod.q + takesBonus*.25 + band.synergy*.06 + budgetBonus - fatiguePenalty));
  const radio = clamp(Math.round((song.hit||45)*.42 + finalQuality*.32 + staff.marketing*.14 + producer.radio*.18 + directionMod.r + room.quality*.08 + studio.master*.04));
  const authenticity = clamp(Math.round((song.originality||50)*.36 + (song.emotion||50)*.24 + room.vibe*.24 + producer.authenticity*.12 + directionMod.a + band.creativity*.12 - Math.max(0, studio.master-75)*.08));
  const productionRisk = clamp(Math.round(room.risk + producer.risk*.25 + directionMod.risk + Math.max(0, 55000 - (Number(studio.budget)||0))/3500 + Math.max(0, studio.takes-5)*5 - staff.production*.14 - staff.logistics*.08));
  const cost = Math.max(0, Math.round(room.cost + producer.fee + (Number(studio.budget)||0) + studio.takes*2500 + studio.mix*280 + studio.master*320));
  return { song, room, producer, direction, staff, band, finalQuality, radio, authenticity, productionRisk, cost }; 
}

function compositionScores(save) {
  const composition = save.composition || createCompositionState();
  const parts = (composition.templates || []).filter(t => (composition.activeSong.parts || []).includes(t.id));
  const band = bandStats(save);
  const staff = staffImpact(save.staff || []);
  const avg = key => Math.round(parts.reduce((a,p)=>a+clamp(p[key]),0) / Math.max(1, parts.length));
  const techniqueBonus = Math.round(band.overall * .22 + staff.production * .18);
  const difficultyPenalty = Math.round(avg('difficulty') * .18);
  const bpm = Number(composition.activeSong?.bpm) || 128;
  const intensity = clamp(composition.activeSong?.intensity ?? 68);
  const lyricDepth = clamp(String(composition.activeSong?.lyric || '').length / 2.6, 0, 100);
  const bpmFit = clamp(100 - Math.abs(bpm - 132) * .85);
  const structureBonus = String(composition.activeSong?.structure || '').includes('Pré-Refrão') ? 6 : String(composition.activeSong?.structure || '').includes('Encore') ? 8 : 3;
  const quality = clamp(Math.round(avg('energy')*.14 + avg('originality')*.22 + avg('emotion')*.18 + avg('commercial')*.14 + intensity*.08 + lyricDepth*.07 + bpmFit*.06 + techniqueBonus - difficultyPenalty + structureBonus + composition.inspiration*.12));
  const hit = clamp(Math.round(avg('commercial')*.38 + quality*.32 + bpmFit*.10 + intensity*.08 + staff.marketing*.08 + band.synergy*.04));
  const originality = clamp(Math.round(avg('originality')*.62 + lyricDepth*.12 + band.creativity*.18 + composition.inspiration*.08));
  const emotion = clamp(Math.round(avg('emotion')*.58 + lyricDepth*.18 + band.morale*.14 + composition.inspiration*.10));
  return { quality, hit, originality, emotion, bpmFit, lyricDepth, partsCount:parts.length, band, staff }; 
}


function staffImpact(staff) {
  const hired = (staff || []).filter(s => s.hired);
  const avg = key => Math.round(hired.reduce((a,s)=>a+clamp(s[key]),0) / Math.max(1, hired.length));
  const payroll = hired.reduce((a,s)=>a+(Number(s.salary)||0),0);
  const staffPower = hired.length ? clamp(Math.round((avg('negotiation') + avg('marketing') + avg('production') + avg('logistics') + avg('scouting') + avg('morale')) / 6)) : 0;
  return { hiredCount:hired.length, payroll, negotiation:avg('negotiation'), marketing:avg('marketing'), production:avg('production'), logistics:avg('logistics'), scouting:avg('scouting'), morale:avg('morale'), staffPower };
}


function createEconomyState() {
  return {
    activeDeal: 'indie_label',
    activeSponsor: 'strings_gold',
    merchFocus: 'Camisetas de turne',
    royalties: 0,
    monthlyExpenses: 0,
    financialReputation: 42,
    history: [],
    labels: [
      { id:'indie_label', name:'Black Road Records', type:'Gravadora Indie', advance:85000, royalty:62, marketing:48, control:78, risk:18, description:'Contrato leve, bom para crescer sem perder identidade.' },
      { id:'global_label', name:'Golden Stage Global', type:'Gravadora Global', advance:380000, royalty:38, marketing:88, control:35, risk:42, description:'Grande alcance internacional, mas reduz liberdade artística.' },
      { id:'distribution', name:'FreeAmp Distribution', type:'Distribuidora', advance:25000, royalty:82, marketing:28, control:92, risk:12, description:'Pouco dinheiro inicial, muita liberdade e royalties melhores.' }
    ],
    sponsors: [
      { id:'strings_gold', name:'GoldWire Strings', category:'Instrumentos', monthly:18000, bonus:32000, requirement:30, fit:78 },
      { id:'energy_drink', name:'Volt Riot Energy', category:'Bebida energética', monthly:42000, bonus:76000, requirement:58, fit:62 },
      { id:'roadcase', name:'IronCase Tour Gear', category:'Equipamentos', monthly:26000, bonus:45000, requirement:44, fit:86 },
      { id:'fashion', name:'Noir Stage Wear', category:'Moda', monthly:55000, bonus:120000, requirement:70, fit:64 }
    ]
  };
}

function economyScores(save) {
  const economy = save.economy || createEconomyState();
  const staff = staffImpact(save.staff || []);
  const fans = Number(save.band?.fans) || 0;
  const cash = Number(save.band?.cash) || 0;
  const label = economy.labels.find(l=>l.id===economy.activeDeal) || economy.labels[0];
  const sponsor = economy.sponsors.find(sp=>sp.id===economy.activeSponsor) || economy.sponsors[0];
  const monthlyIncome = Math.round((fans * 0.42) + sponsor.monthly + (save.release?.published?.length || 0) * 9500 + staff.negotiation * 620);
  const payroll = staff.payroll || 0;
  const ops = Math.round(28000 + payroll + Math.max(0, fans/12));
  const royaltyProjection = Math.round((save.release?.published || []).reduce((a,r)=>a+(Number(r.streams)||0),0) * (label.royalty/100) * 0.011);
  const sponsorFit = clamp(sponsor.fit + staff.negotiation*.12 + staff.marketing*.08 - Math.max(0, sponsor.requirement - (save.band?.xp||0)/220));
  const stability = clamp(Math.round(50 + cash/90000 + staff.negotiation*.18 + sponsorFit*.16 - ops/12000));
  const runway = ops > 0 ? Math.max(0, Math.floor(cash / ops)) : 99;
  return { economy, staff, label, sponsor, monthlyIncome, ops, royaltyProjection, sponsorFit, stability, runway, net: monthlyIncome + royaltyProjection - ops };
}

function renderEconomy() {
  const save = ensureSave();
  save.economy = save.economy || createEconomyState();
  const e = economyScores(save);
  $('#economyCash') && ($('#economyCash').textContent = '$ ' + Number(save.band.cash||0).toLocaleString('pt-BR'));
  $('#economyIncome') && ($('#economyIncome').textContent = '$ ' + e.monthlyIncome.toLocaleString('pt-BR'));
  $('#economyExpenses') && ($('#economyExpenses').textContent = '$ ' + e.ops.toLocaleString('pt-BR'));
  $('#economyNet') && ($('#economyNet').textContent = '$ ' + e.net.toLocaleString('pt-BR'));
  $('#metricFinanceStability') && ($('#metricFinanceStability').textContent = e.stability);
  $('#metricFinanceStability')?.parentElement?.querySelector('em')?.setAttribute('style', `width:${e.stability}%`);
  $('#metricSponsorFit') && ($('#metricSponsorFit').textContent = e.sponsorFit);
  $('#metricSponsorFit')?.parentElement?.querySelector('em')?.setAttribute('style', `width:${e.sponsorFit}%`);
  $('#metricRunway') && ($('#metricRunway').textContent = e.runway + 'm');
  $('#metricRunway')?.parentElement?.querySelector('em')?.setAttribute('style', `width:${clamp(e.runway*8)}%`);
  $('#economyNarrative') && ($('#economyNarrative').textContent = e.net >= 0 ? 'Operação saudável: a banda pode investir em produção, shows e marketing.' : 'Atenção: despesas superam receitas. Negocie patrocínio, reduza custos ou lance conteúdo.');
  const labels = $('#labelList'); if (labels){ labels.innerHTML=''; e.economy.labels.forEach(l=>{const b=document.createElement('button'); b.className='deal-card '+(l.id===e.economy.activeDeal?'selected':''); b.dataset.labelDeal=l.id; b.innerHTML=`<strong>${l.name}</strong><span>${l.type} • Adiantamento $ ${l.advance.toLocaleString('pt-BR')}</span><small>Royalties ${l.royalty}% • Controle criativo ${l.control}%</small>`; labels.appendChild(b);});}
  const sponsors = $('#sponsorList'); if (sponsors){ sponsors.innerHTML=''; e.economy.sponsors.forEach(sp=>{const b=document.createElement('button'); b.className='deal-card '+(sp.id===e.economy.activeSponsor?'selected':''); b.dataset.sponsorDeal=sp.id; b.innerHTML=`<strong>${sp.name}</strong><span>${sp.category} • Mensal $ ${sp.monthly.toLocaleString('pt-BR')}</span><small>Bônus $ ${sp.bonus.toLocaleString('pt-BR')} • Fit ${sp.fit}%</small>`; sponsors.appendChild(b);});}
  const hist=$('#economyHistory'); if(hist){ hist.innerHTML=''; (e.economy.history||[]).slice(-6).reverse().forEach(item=>{const row=document.createElement('div'); row.className='song-row'; row.innerHTML=`<strong>${item.title}</strong><span>${item.text}</span>`; hist.appendChild(row);}); if(!e.economy.history?.length) hist.innerHTML='<p class="muted">Nenhum mês financeiro simulado ainda.</p>'; }
}

function persistEconomyControls() { const save=ensureSave(); save.economy=save.economy||createEconomyState(); save.economy.merchFocus=$('#merchFocus')?.value||save.economy.merchFocus; saveGame(save); renderEconomy(); }
function simulateEconomyMonth() { const save=ensureSave(); save.economy=save.economy||createEconomyState(); const e=economyScores(save); save.band.cash=Math.max(0, Math.round((save.band.cash||0)+e.net)); save.economy.royalties=(save.economy.royalties||0)+e.royaltyProjection; save.economy.monthlyExpenses=e.ops; save.economy.financialReputation=clamp((save.economy.financialReputation||42)+(e.net>=0?3:-4)); save.economy.history=[...(save.economy.history||[]), {title:e.net>=0?'Mês positivo':'Mês no vermelho', text:`Receita $ ${e.monthlyIncome.toLocaleString('pt-BR')} • Royalties $ ${e.royaltyProjection.toLocaleString('pt-BR')} • Despesas $ ${e.ops.toLocaleString('pt-BR')} • Saldo $ ${e.net.toLocaleString('pt-BR')}`, at:new Date().toISOString()}].slice(-20); saveGame(save); renderEconomy(); syncProfileToUI(save); }



function createContractsState() {
  return {
    selectedType:'label', selectedId:'indie_label', priority:'balanced', negotiationRounds:0,
    activeLabel:null, activeSponsor:null, signedAt:null, monthsRemaining:0, history:[],
    labels:[
      {id:'indie_label',name:'Black Road Records',type:'Gravadora Indie',advance:85000,royalty:62,marketing:48,control:78,duration:18,risk:18,minFans:0,description:'Crescimento orgânico, boa liberdade artística e suporte regional.'},
      {id:'global_label',name:'Golden Stage Global',type:'Gravadora Global',advance:380000,royalty:38,marketing:88,control:35,duration:36,risk:44,minFans:18000,description:'Alcance internacional forte, mas maior pressão comercial e menos controle.'},
      {id:'distribution',name:'FreeAmp Distribution',type:'Distribuição Digital',advance:25000,royalty:82,marketing:28,control:94,duration:12,risk:10,minFans:0,description:'Mais royalties e liberdade, com marketing limitado.'},
      {id:'faith_collective',name:'Lumen Music Collective',type:'Coletivo Gospel/Soul',advance:110000,royalty:68,marketing:60,control:82,duration:24,risk:15,minFans:5000,description:'Rede plural para gospel, soul, pop e música de propósito.'}
    ],
    sponsors:[
      {id:'strings_gold',name:'GoldWire Instruments',category:'Instrumentos',monthly:18000,bonus:32000,requirement:30,fit:78,duration:12,risk:12},
      {id:'audio_brand',name:'PureTone Audio',category:'Áudio profissional',monthly:32000,bonus:65000,requirement:48,fit:88,duration:18,risk:16},
      {id:'fashion',name:'Noir Stage Wear',category:'Moda e palco',monthly:55000,bonus:120000,requirement:70,fit:64,duration:12,risk:30},
      {id:'community',name:'Unity Culture Network',category:'Cultura e impacto social',monthly:27000,bonus:50000,requirement:42,fit:92,duration:18,risk:8}
    ]
  };
}
function contractNegotiationPower(save){
  const staff=staffImpact(save.staff||[]), fans=Number(save.band?.fans)||0, xp=Number(save.band?.xp)||0;
  const dynamics=save.bandDynamics||createBandDynamicsState();
  return clamp(Math.round(22 + staff.negotiation*.38 + Math.log10(Math.max(10,fans))*8 + Math.min(20,xp/5000) + (dynamics.trust||50)*.08));
}
function selectedContractOffer(save){
  const c=save.contracts||createContractsState();
  const list=c.selectedType==='sponsor'?c.sponsors:c.labels;
  return list.find(x=>x.id===c.selectedId)||list[0];
}
function contractProjection(save){
  const c=save.contracts||createContractsState(), offer=selectedContractOffer(save), power=contractNegotiationPower(save);
  const priority=c.priority||'balanced';
  const mods={balanced:{chance:5,value:1,freedom:0},royalty:{chance:-8,value:1.12,freedom:4},advance:{chance:-10,value:1.18,freedom:-4},freedom:{chance:-6,value:.96,freedom:12},marketing:{chance:-4,value:1.08,freedom:-2}}[priority];
  const requirement=offer.minFans||offer.requirement||0, fans=Number(save.band?.fans)||0;
  const eligibility=requirement>0?clamp(100-(Math.max(0,requirement-fans)/Math.max(1,requirement))*90):100;
  const chance=clamp(Math.round(35+power*.55+mods.chance+(eligibility-50)*.25-(offer.risk||0)*.18));
  const value=offer.monthly?Math.round((offer.monthly*offer.duration+offer.bonus)*mods.value):Math.round((offer.advance+(offer.marketing||0)*5000)*mods.value);
  const freedom=offer.control!=null?clamp(offer.control+mods.freedom):100;
  return {c,offer,power,chance,value,freedom,risk:clamp(Math.round((offer.risk||10)+(100-chance)*.18)),duration:offer.duration||12};
}
function renderContracts(){
  const save=ensureSave(); save.contracts=save.contracts||createContractsState(); const p=contractProjection(save), c=p.c;
  $('#contractPower')&&($('#contractPower').textContent=p.power+'%');
  const activeLabel=c.labels.find(x=>x.id===c.activeLabel), activeSponsor=c.sponsors.find(x=>x.id===c.activeSponsor);
  $('#activeContractName')&&($('#activeContractName').textContent=activeLabel?.name||'Independente');
  $('#activeContractTerms')&&($('#activeContractTerms').textContent=activeLabel?`${activeLabel.royalty}% royalties • ${c.monthsRemaining||activeLabel.duration} meses`:'Sem vínculo');
  $('#activeSponsorName')&&($('#activeSponsorName').textContent=activeSponsor?.name||'Nenhum');
  $('#activeSponsorTerms')&&($('#activeSponsorTerms').textContent=activeSponsor?`$ ${activeSponsor.monthly.toLocaleString('pt-BR')}/mês`:'Sem receita mensal');
  $('#contractMonthlyIncome')&&($('#contractMonthlyIncome').textContent='$ '+Number(activeSponsor?.monthly||0).toLocaleString('pt-BR'));
  $('#creativeFreedom')&&($('#creativeFreedom').textContent=(activeLabel?.control??100)+'%');
  const labelList=$('#contractOfferList'); if(labelList){labelList.innerHTML=''; c.labels.forEach(o=>{const b=document.createElement('button');b.className='deal-card '+(c.selectedType==='label'&&c.selectedId===o.id?'selected':'');b.dataset.contractOffer=o.id;b.innerHTML=`<strong>${o.name}</strong><span>${o.type} • $ ${o.advance.toLocaleString('pt-BR')}</span><small>Royalties ${o.royalty}% • Marketing ${o.marketing}% • Controle ${o.control}%</small>`;labelList.appendChild(b);});}
  const sponsorList=$('#contractSponsorList'); if(sponsorList){sponsorList.innerHTML=''; c.sponsors.forEach(o=>{const b=document.createElement('button');b.className='deal-card '+(c.selectedType==='sponsor'&&c.selectedId===o.id?'selected':'');b.dataset.contractSponsor=o.id;b.innerHTML=`<strong>${o.name}</strong><span>${o.category} • $ ${o.monthly.toLocaleString('pt-BR')}/mês</span><small>Bônus $ ${o.bonus.toLocaleString('pt-BR')} • Fit ${o.fit}%</small>`;sponsorList.appendChild(b);});}
  $('#contractNarrative')&&($('#contractNarrative').textContent=`${p.offer.name}: ${p.offer.description||p.offer.category}. Poder ${p.power}%, chance ${p.chance}% e risco ${p.risk}%.`);
  $('#contractChance')&&($('#contractChance').textContent=p.chance+'%'); $('#contractRisk')&&($('#contractRisk').textContent=p.risk+'%'); $('#contractValue')&&($('#contractValue').textContent='$ '+p.value.toLocaleString('pt-BR')); $('#contractDuration')&&($('#contractDuration').textContent=p.duration+' meses');
  const priority=$('#contractPriority'); if(priority) priority.value=c.priority;
  const hist=$('#contractHistory'); if(hist){hist.innerHTML='';(c.history||[]).slice(-8).reverse().forEach(h=>{const row=document.createElement('div');row.className='song-row';row.innerHTML=`<strong>${h.title}</strong><span>${h.text}</span>`;hist.appendChild(row);});if(!c.history?.length)hist.innerHTML='<p class="muted">Nenhuma negociação registrada.</p>';}
}
function persistContractControls(){const save=ensureSave();save.contracts=save.contracts||createContractsState();save.contracts.priority=$('#contractPriority')?.value||'balanced';saveGame(save);renderContracts();}
function negotiateSelectedContract(){const save=ensureSave();save.contracts=save.contracts||createContractsState();const p=contractProjection(save);const success=Math.random()*100<p.chance;save.contracts.negotiationRounds=(save.contracts.negotiationRounds||0)+1;if(success){if(save.contracts.selectedType==='label'){p.offer.royalty=clamp(p.offer.royalty+(save.contracts.priority==='royalty'?4:1));p.offer.advance=Math.round(p.offer.advance*(save.contracts.priority==='advance'?1.12:1.04));p.offer.control=clamp(p.offer.control+(save.contracts.priority==='freedom'?7:2));}else{p.offer.monthly=Math.round(p.offer.monthly*1.06);p.offer.bonus=Math.round(p.offer.bonus*1.08);}save.contracts.history.push({title:'Negociação bem-sucedida',text:`${p.offer.name} melhorou os termos após a rodada ${save.contracts.negotiationRounds}.`});}else save.contracts.history.push({title:'Contraproposta recusada',text:`${p.offer.name} manteve os termos. Reforce reputação, fãs ou staff antes de tentar novamente.`});save.contracts.history=save.contracts.history.slice(-30);saveGame(save);renderContracts();}
function signSelectedContract(){const save=ensureSave();save.contracts=save.contracts||createContractsState();const p=contractProjection(save);if(Math.random()*100>p.chance){save.contracts.history.push({title:'Acordo não fechado',text:`${p.offer.name} encerrou a rodada sem assinatura.`});saveGame(save);renderContracts();return;}if(save.contracts.selectedType==='label'){save.contracts.activeLabel=p.offer.id;save.contracts.monthsRemaining=p.duration;save.band.cash=Math.round((save.band.cash||0)+(p.offer.advance||0));}else{save.contracts.activeSponsor=p.offer.id;save.band.cash=Math.round((save.band.cash||0)+(p.offer.bonus||0));}save.contracts.signedAt=new Date().toISOString();save.contracts.history.push({title:'Contrato assinado',text:`A banda assinou com ${p.offer.name}. Valor projetado $ ${p.value.toLocaleString('pt-BR')}.`});saveGame(save);syncProfileToUI(save);renderContracts();}
function terminateActiveContract(){const save=ensureSave();save.contracts=save.contracts||createContractsState();const c=save.contracts;if(!c.activeLabel&&!c.activeSponsor){c.history.push({title:'Nenhum vínculo ativo',text:'Não existe contrato para encerrar.'});}else{const penalty=Math.min(Number(save.band.cash||0),Math.round((c.activeLabel?45000:18000)+(c.monthsRemaining||0)*1200));save.band.cash=Math.max(0,(save.band.cash||0)-penalty);c.history.push({title:'Vínculo encerrado',text:`Multa de rescisão: $ ${penalty.toLocaleString('pt-BR')}.`});c.activeLabel=null;c.activeSponsor=null;c.monthsRemaining=0;}saveGame(save);syncProfileToUI(save);renderContracts();}

function createWorldTourState() {
  return {
    activeRoute: 'south_america', transport: 'tour_bus', crewPlan: 'balanced', tourWeek: 1, fatigue: 18, logisticsRisk: 22, history: [],
    routes: [
      { id:'south_america', name:'South America Breakout', region:'América do Sul', cities:['São Paulo','Buenos Aires','Santiago','Lima'], cost:95000, capacity:6200, reputation:32, distance:42, climate:'quente', flag:'🌎' },
      { id:'europe_clubs', name:'Europe Club Circuit', region:'Europa', cities:['Lisboa','Madrid','Paris','Berlim','Londres'], cost:220000, capacity:14800, reputation:58, distance:76, climate:'variado', flag:'🇪🇺' },
      { id:'us_coast', name:'US Coast to Coast', region:'América do Norte', cities:['New York','Chicago','Austin','Los Angeles'], cost:310000, capacity:23500, reputation:67, distance:84, climate:'continental', flag:'🇺🇸' },
      { id:'asia_festival', name:'Asia Festival Run', region:'Ásia', cities:['Tokyo','Seoul','Bangkok','Singapore'], cost:420000, capacity:42000, reputation:82, distance:96, climate:'úmido', flag:'🇯🇵' }
    ]
  };
}
function tourScores(save) {
  const tour = save.tour || createWorldTourState();
  const route = (tour.routes || []).find(r => r.id === tour.activeRoute) || createWorldTourState().routes[0];
  const staff = staffImpact(save.staff || []), economy = economyScores(save), band = bandStats(save);
  const transportMod = { night_bus:-12, van:-4, tour_bus:8, jet:18 }[tour.transport] || 0;
  const crewMod = { lean:-8, balanced:4, premium:14 }[tour.crewPlan] || 0;
  const readiness = clamp(Math.round(band.overall*.28 + staff.logistics*.26 + staff.morale*.12 + economy.stability*.16 + transportMod + crewMod - route.distance*.12 - tour.fatigue*.18));
  const risk = clamp(Math.round(route.distance*.28 + route.cost/25000 + tour.fatigue*.24 - staff.logistics*.30 - staff.staffPower*.08 - crewMod));
  const hype = clamp(Math.round(route.reputation*.33 + band.presence*.22 + (save.social?.marketHeat||48)*.20 + (save.release?.published?.length||0)*4 + staff.marketing*.15));
  const projectedFans = Math.max(0, Math.round(route.capacity * (0.18 + hype/180) * (0.75 + readiness/170)));
  const gross = Math.round(projectedFans * (34 + hype*.38));
  const finalCost = Math.round(route.cost * ({night_bus:.82, van:.74, tour_bus:1.0, jet:1.45}[tour.transport] || 1) * ({lean:.82, balanced:1, premium:1.28}[tour.crewPlan] || 1));
  return { tour, route, staff, economy, band, readiness, risk, hype, projectedFans, gross, finalCost, net:gross-finalCost };
}
function renderWorldTour() {
  const save = ensureSave(); save.tour = save.tour || createWorldTourState(); const t = tourScores(save);
  $('#tourCash') && ($('#tourCash').textContent = '$ ' + Number(save.band.cash||0).toLocaleString('pt-BR'));
  $('#tourNarrative') && ($('#tourNarrative').textContent = `${t.route.name}: ${t.route.cities.join(' • ')}. Risco ${t.risk}%, prontidão ${t.readiness}% e potencial de fãs ${t.projectedFans.toLocaleString('pt-BR')}.`);
  $('#tourGross') && ($('#tourGross').textContent = '$ ' + t.gross.toLocaleString('pt-BR')); $('#tourCost') && ($('#tourCost').textContent = '$ ' + t.finalCost.toLocaleString('pt-BR')); $('#tourNet') && ($('#tourNet').textContent = '$ ' + t.net.toLocaleString('pt-BR'));
  [['metricTourReadiness',t.readiness],['metricTourHype',t.hype],['metricTourRisk',t.risk]].forEach(([id,val])=>{ const el=$('#'+id); if(el){el.textContent=val; el.parentElement?.querySelector('em')?.setAttribute('style',`width:${val}%`);} });
  const routeList=$('#tourRouteList'); if(routeList){ routeList.innerHTML=''; t.tour.routes.forEach(r=>{ const b=document.createElement('button'); b.className='deal-card '+(r.id===t.tour.activeRoute?'selected':''); b.dataset.tourRoute=r.id; b.innerHTML=`<strong>${r.flag} ${r.name}</strong><span>${r.region} • ${r.cities.length} datas • público base ${r.capacity.toLocaleString('pt-BR')}</span><small>Custo $ ${r.cost.toLocaleString('pt-BR')} • distância ${r.distance}% • reputação ${r.reputation}%</small>`; routeList.appendChild(b); }); }
  const hist=$('#tourHistory'); if(hist){ hist.innerHTML=''; (t.tour.history||[]).slice(-6).reverse().forEach(item=>{const row=document.createElement('div'); row.className='song-row'; row.innerHTML=`<strong>${item.title}</strong><span>${item.text}</span>`; hist.appendChild(row);}); if(!t.tour.history?.length) hist.innerHTML='<p class="muted">Nenhuma turnê simulada ainda.</p>'; }
}
function persistTourControls() { const save=ensureSave(); save.tour=save.tour||createWorldTourState(); save.tour.transport=$('#tourTransport')?.value||save.tour.transport; save.tour.crewPlan=$('#tourCrew')?.value||save.tour.crewPlan; saveGame(save); renderWorldTour(); }
function launchWorldTour() { const save=ensureSave(); save.tour=save.tour||createWorldTourState(); persistTourControls(); const t=tourScores(save); const success=t.readiness>=t.risk||t.hype>72; const fanGain=Math.round(t.projectedFans*(success?1:.45)); save.band.cash=Math.max(0,Math.round((save.band.cash||0)+t.net)); save.band.fans=Math.max(0,Math.round((save.band.fans||0)+fanGain)); save.band.xp=Math.max(0,Math.round((save.band.xp||0)+t.hype*18+t.readiness*12)); save.tour.fatigue=clamp((save.tour.fatigue||0)+Math.round(t.route.distance*.16)+(success?8:16)); save.tour.logisticsRisk=clamp(t.risk+(success?-6:8)); save.tour.tourWeek=(save.tour.tourWeek||1)+1; save.tour.history=[...(save.tour.history||[]),{title:success?'Turnê bem-sucedida':'Turnê turbulenta',text:`${t.route.name}: fãs +${fanGain.toLocaleString('pt-BR')} • caixa ${t.net>=0?'+':''}$ ${t.net.toLocaleString('pt-BR')} • risco ${t.risk}%`,at:new Date().toISOString()}].slice(-20); saveGame(save); renderWorldTour(); syncProfileToUI(save); }
function restTourCrew() { const save=ensureSave(); save.tour=save.tour||createWorldTourState(); save.tour.fatigue=clamp((save.tour.fatigue||0)-18); save.tour.logisticsRisk=clamp((save.tour.logisticsRisk||0)-10); save.band.cash=Math.max(0,Math.round((save.band.cash||0)-18000)); save.tour.history=[...(save.tour.history||[]),{title:'Semana de descanso',text:'Equipe recuperou energia e reduziu risco logístico. Custo $ 18.000.',at:new Date().toISOString()}].slice(-20); saveGame(save); renderWorldTour(); syncProfileToUI(save); }




function createBandDynamicsState() {
  return { morale:68, chemistry:64, trust:61, egoPressure:34, ruptureRisk:18, meetings:0, bonding:0, activeConflict:null, history:[] };
}
function dynamicsScores(save) {
  save.bandDynamics=save.bandDynamics||createBandDynamicsState();
  const d=save.bandDynamics, members=save.band?.members||[];
  const memberMorale=members.length?members.reduce((a,m)=>a+Number(m.morale||65),0)/members.length:65;
  const memberEgo=members.length?members.reduce((a,m)=>a+Number(m.ego||35),0)/members.length:35;
  d.morale=clamp(Math.round((d.morale*2+memberMorale)/3));
  d.egoPressure=clamp(Math.round((d.egoPressure*2+memberEgo)/3));
  const harmony=clamp(Math.round(d.morale*.28+d.chemistry*.30+d.trust*.27+(100-d.egoPressure)*.15));
  d.ruptureRisk=clamp(Math.round(100-harmony+(d.activeConflict?18:0)));
  return {...d,harmony};
}
function renderBandDynamics() {
  const save=ensureSave(), d=dynamicsScores(save);
  $('#dynamicsHarmony')&&($('#dynamicsHarmony').textContent=d.harmony+'%');
  $('#dynamicsMorale')&&($('#dynamicsMorale').textContent=d.morale+'%');
  $('#dynamicsChemistry')&&($('#dynamicsChemistry').textContent=d.chemistry+'%');
  $('#dynamicsTrust')&&($('#dynamicsTrust').textContent=d.trust+'%');
  $('#dynamicsEgo')&&($('#dynamicsEgo').textContent=d.egoPressure+'%');
  $('#dynamicsRisk')&&($('#dynamicsRisk').textContent=d.ruptureRisk+'%');
  const narrative=d.harmony>=80?'A banda está unida, criativa e pronta para decisões ambiciosas.':d.harmony>=60?'O grupo funciona bem, mas pequenas tensões precisam de atenção.':d.harmony>=40?'A convivência está instável e já afeta a performance.':'A banda está próxima de uma ruptura séria.';
  $('#dynamicsNarrative')&&($('#dynamicsNarrative').textContent=narrative);
  const list=$('#dynamicsMembers'); if(list){list.innerHTML='';(save.band?.members||[]).forEach((m,i)=>{const row=document.createElement('div');row.className='dynamics-member';row.innerHTML=`<b>${m.name||'Integrante '+(i+1)}</b><span>${m.role||'Músico'} • moral ${m.morale||65}% • ego ${m.ego||35}%</span><em>${(m.morale||65)>70?'Estável':(m.morale||65)>45?'Atenção':'Crítico'}</em>`;list.appendChild(row);});}
  const conflict=$('#activeConflict'); if(conflict){conflict.innerHTML=d.activeConflict?`<strong>${d.activeConflict.title}</strong><p>${d.activeConflict.text}</p><small>Impacto potencial: ${d.activeConflict.impact}</small>`:'<p class="muted">Nenhum conflito grave no momento.</p>';}
  const hist=$('#dynamicsHistory'); if(hist){hist.innerHTML='';(d.history||[]).slice(0,8).forEach(x=>{const row=document.createElement('div');row.className='song-row';row.innerHTML=`<strong>${x.title}</strong><span>${x.text}</span>`;hist.appendChild(row);});if(!d.history?.length)hist.innerHTML='<p class="muted">Nenhuma reunião ou conflito registrado.</p>';}
}
function bandMeeting() {
  const save=ensureSave(); save.bandDynamics=save.bandDynamics||createBandDynamicsState(); const d=save.bandDynamics; const cost=1200;
  if((save.band?.cash||0)<cost){playUiTone('error');return;}
  save.band.cash-=cost; d.trust=clamp(d.trust+8); d.morale=clamp(d.morale+5); d.egoPressure=clamp(d.egoPressure-4); d.meetings++;
  d.history=[{title:'Reunião de alinhamento',text:'Expectativas foram discutidas. Confiança e moral aumentaram.',at:nowISO()},...(d.history||[])].slice(0,20);
  save.systems={...(save.systems||{}),phase15BandDynamics:true}; saveGame(save);syncProfileToUI(save);renderBandDynamics();playUiTone('success');
}
function teamBonding() {
  const save=ensureSave(); save.bandDynamics=save.bandDynamics||createBandDynamicsState(); const d=save.bandDynamics; const cost=3500;
  if((save.band?.cash||0)<cost){playUiTone('error');return;}
  save.band.cash-=cost; d.chemistry=clamp(d.chemistry+9); d.morale=clamp(d.morale+7); d.trust=clamp(d.trust+5); d.bonding++;
  d.history=[{title:'Integração da equipe',text:'A atividade fortaleceu química musical e colaboração.',at:nowISO()},...(d.history||[])].slice(0,20);
  saveGame(save);syncProfileToUI(save);renderBandDynamics();playUiTone('success');
}
function generateBandConflict() {
  const save=ensureSave(); save.bandDynamics=save.bandDynamics||createBandDynamicsState(); const d=save.bandDynamics;
  const pool=[
    {title:'Disputa por protagonismo',text:'Dois integrantes querem mais destaque nas próximas músicas.',impact:'ego e confiança'},
    {title:'Divergência criativa',text:'A banda está dividida entre uma direção comercial e outra artística.',impact:'química musical'},
    {title:'Cansaço de turnê',text:'Um integrante sente que a agenda está prejudicando sua saúde e motivação.',impact:'moral e estabilidade'},
    {title:'Divisão financeira',text:'A distribuição de cachês e royalties foi questionada pelo grupo.',impact:'confiança e risco de ruptura'}
  ];
  d.activeConflict=pool[Math.floor(Math.random()*pool.length)]; d.ruptureRisk=clamp(d.ruptureRisk+12); d.history=[{title:'Novo conflito',text:d.activeConflict.title,at:nowISO()},...(d.history||[])].slice(0,20); saveGame(save);renderBandDynamics();playUiTone('error');
}
function resolveBandConflict() {
  const save=ensureSave(); save.bandDynamics=save.bandDynamics||createBandDynamicsState(); const d=save.bandDynamics;
  if(!d.activeConflict){playUiTone('error');return;}
  const success=Math.random()*100<(d.trust*.45+d.chemistry*.30+d.morale*.25);
  const title=d.activeConflict.title; d.activeConflict=null;
  if(success){d.trust=clamp(d.trust+7);d.chemistry=clamp(d.chemistry+4);d.egoPressure=clamp(d.egoPressure-5);d.history=[{title:'Conflito resolvido',text:`${title}: acordo produtivo alcançado.`,at:nowISO()},...(d.history||[])].slice(0,20);}else{d.morale=clamp(d.morale-8);d.trust=clamp(d.trust-6);d.egoPressure=clamp(d.egoPressure+7);d.history=[{title:'Conflito agravado',text:`${title}: a solução não convenceu todos os integrantes.`,at:nowISO()},...(d.history||[])].slice(0,20);}
  saveGame(save);renderBandDynamics();playUiTone(success?'success':'error');
}

function createWorldRankingState() {
  return {
    season: 1, previousPosition: null, position: null, score: 0, prestige: 0, nominations: 0, wins: 0, lastAwardSeason: 0,
    rivals: [
      {id:'nova_soul',name:'Nova Soul',genre:'Soul / Gospel',region:'Estados Unidos',base:76,momentum:62},
      {id:'luz_urbana',name:'Luz Urbana',genre:'Rap / Pop',region:'Brasil',base:72,momentum:68},
      {id:'north_folk',name:'North Folk Union',genre:'Folk / Indie',region:'Reino Unido',base:69,momentum:57},
      {id:'tokyo_pulse',name:'Tokyo Pulse',genre:'Pop / Eletrônico',region:'Japão',base:82,momentum:73},
      {id:'grace_avenue',name:'Grace Avenue',genre:'Gospel contemporâneo',region:'Canadá',base:74,momentum:64},
      {id:'solar_verse',name:'Solar Verse',genre:'Rock / Alternativo',region:'Alemanha',base:79,momentum:60},
      {id:'raiz_profunda',name:'Raiz Profunda',genre:'Folk / MPB',region:'Brasil',base:67,momentum:59}
    ],
    awards: [], history: []
  };
}
function bandWorldScore(save) {
  const fans=Math.max(0,Number(save.band?.fans||0)), xp=Math.max(0,Number(save.band?.xp||0)), cash=Math.max(0,Number(save.band?.cash||0));
  const releases=save.release?.published?.length||0, shows=save.liveShow?.history?.length||0;
  const campaign=save.longCampaign||createLongCampaignState();
  return Math.max(1,Math.round(Math.log10(fans+10)*1180 + Math.log10(xp+10)*920 + Math.log10(cash+100)*480 + releases*175 + shows*115 + (campaign.momentum||0)*12 + (campaign.stability||0)*7));
}
function rankingRows(save) {
  save.worldRanking=save.worldRanking||createWorldRankingState(); const state=save.worldRanking; const season=Math.max(1,save.longCampaign?.season||state.season||1);
  const playerScore=bandWorldScore(save);
  const rows=(state.rivals||[]).map((r,i)=>{ const wave=Math.sin((season+i*1.73)*1.17)*210; const growth=season*95 + (r.momentum||50)*8; return {...r,score:Math.max(2000,Math.round(r.base*105+growth+wave))}; });
  rows.push({id:'player',name:save.band?.name||'Sua Banda',genre:save.band?.genre||'Plural',region:save.player?.country||'Brasil',score:playerScore,player:true});
  rows.sort((a,b)=>b.score-a.score); return rows;
}
function syncWorldRanking(save, record=false) {
  save.worldRanking=save.worldRanking||createWorldRankingState(); const st=save.worldRanking, rows=rankingRows(save);
  const pos=rows.findIndex(r=>r.player)+1; st.previousPosition=st.position||pos; st.position=pos; st.score=bandWorldScore(save); st.season=Math.max(1,save.longCampaign?.season||st.season||1);
  if(record){ st.history=[{season:st.season,position:pos,score:st.score,fans:save.band?.fans||0,prestige:st.prestige||0,at:nowISO()},...(st.history||[])].slice(0,24); }
  return rows;
}
function renderWorldRanking() {
  const save=ensureSave(); const rows=syncWorldRanking(save,false), st=save.worldRanking;
  $('#rankingPosition')&&($('#rankingPosition').textContent='#'+st.position); $('#rankingScore')&&($('#rankingScore').textContent=formatNumberLocalized(st.score));
  $('#rankingSeason')&&($('#rankingSeason').textContent=String(st.season)); const delta=(st.previousPosition||st.position)-st.position; $('#rankingMovement')&&($('#rankingMovement').textContent=delta>0?'▲ '+delta:delta<0?'▼ '+Math.abs(delta):'—');
  $('#awardNominations')&&($('#awardNominations').textContent=String(st.nominations||0)); $('#awardWins')&&($('#awardWins').textContent=String(st.wins||0)); $('#awardPrestige')&&($('#awardPrestige').textContent=String(st.prestige||0));
  const list=$('#worldRankingList'); if(list){list.innerHTML=''; rows.forEach((r,i)=>{const row=document.createElement('div');row.className='ranking-row'+(r.player?' player-row':'');row.innerHTML=`<b>#${i+1}</b><span><strong>${r.name}</strong><small>${r.genre} • ${r.region}</small></span><em>${formatNumberLocalized(r.score)}</em>`;list.appendChild(row);});}
  const rivals=$('#rivalList'); if(rivals){rivals.innerHTML=''; rows.filter(r=>!r.player).slice(0,4).forEach(r=>{const d=document.createElement('div');d.className='song-row';d.innerHTML=`<strong>${r.name}</strong><span>${r.genre} • ${r.region} • ${r.score>st.score?'à frente':'ao alcance'}</span>`;rivals.appendChild(d);});}
  const closest=rows.filter(r=>!r.player).sort((a,b)=>Math.abs(a.score-st.score)-Math.abs(b.score-st.score))[0]; $('#rivalNarrative')&&($('#rivalNarrative').textContent=closest?`${closest.name} é o rival mais próximo. Diferença de ${formatNumberLocalized(Math.abs(closest.score-st.score))} pontos.`:'Sem rival definido.');
  const awards=$('#awardList'); if(awards){awards.innerHTML='';(st.awards||[]).slice(0,6).forEach(a=>{const d=document.createElement('div');d.className='song-row';d.innerHTML=`<strong>${a.won?'🏆':'◆'} ${a.title}</strong><span>Temporada ${a.season} • ${a.won?'Vencedor':'Indicado'}</span>`;awards.appendChild(d);});if(!st.awards?.length)awards.innerHTML='<p class="muted">Nenhuma premiação realizada ainda.</p>'; }
  const hist=$('#rankingHistory'); if(hist){hist.innerHTML='';(st.history||[]).slice(0,10).forEach(x=>{const d=document.createElement('div');d.className='season-history-row';d.innerHTML=`<b>Temporada ${x.season}</b><span>#${x.position} mundial • ${formatNumberLocalized(x.score)} pontos • ${formatNumberLocalized(x.fans)} fãs</span><em>Prestígio ${x.prestige}</em>`;hist.appendChild(d);});if(!st.history?.length)hist.innerHTML='<p class="muted">Conclua ou simule uma temporada para registrar o histórico.</p>'; }
}
function processAnnualAwards() {
  const save=ensureSave(); save.worldRanking=save.worldRanking||createWorldRankingState(); const st=save.worldRanking; const season=Math.max(1,save.longCampaign?.season||1);
  if(st.lastAwardSeason===season){playUiTone('error');return;}
  const score=bandWorldScore(save), releases=save.release?.published?.length||0, shows=save.liveShow?.history?.length||0, social=save.social?.hype||save.social?.marketHeat||0;
  const pool=[['Artista Revelação Global',score>7200],['Melhor Performance ao Vivo',shows>=2||score>8500],['Impacto Digital do Ano',social>=62||save.band?.fans>=30000],['Projeto Musical do Ano',releases>=1&&score>8000],['Prêmio Diversidade Sonora',true]];
  const nominations=pool.filter((_,i)=>score>5600+i*420).slice(0,Math.max(1,Math.min(4,1+Math.floor(score/3500))));
  const results=nominations.map(([title,eligible],i)=>{const chance=clamp(18+(score-5500)/70+(eligible?18:0)+(st.prestige||0)*.3-i*7);return{title,season,won:Math.random()*100<chance};});
  const wins=results.filter(x=>x.won).length; st.nominations=(st.nominations||0)+results.length; st.wins=(st.wins||0)+wins; st.prestige=clamp((st.prestige||0)+results.length*3+wins*12); st.lastAwardSeason=season; st.awards=[...results,...(st.awards||[])].slice(0,30);
  save.band.xp=Math.round((save.band.xp||0)+results.length*280+wins*1200); save.band.fans=Math.round((save.band.fans||0)+results.length*450+wins*3200); syncWorldRanking(save,true);
  save.systems={...(save.systems||{}),phase14WorldRanking:true,annualAwards:true,persistentRivals:true}; saveGame(save);syncProfileToUI(save);renderWorldRanking();playUiTone(wins?'success':'click');
}

function createLongCampaignState() {
  return {
    season: 1,
    simulatedWeeks: 0,
    horizon: 12,
    strategy: 'balanced',
    stability: 58,
    burnout: 12,
    momentum: 44,
    lastProjection: null,
    milestones: [],
    history: []
  };
}

function campaignDifficultyMultiplier(save) {
  const difficulty = String(save?.player?.difficulty || save?.difficulty || 'Normal').toLowerCase();
  if (difficulty.includes('lenda') || difficulty.includes('legend')) return 0.78;
  if (difficulty.includes('real')) return 0.9;
  return 1;
}

function campaignProjection(save) {
  const campaign = save.longCampaign || createLongCampaignState();
  const weeks = Math.max(4, Number(campaign.horizon) || 12);
  const strategy = campaign.strategy || 'balanced';
  const m = coreMetrics(save);
  const difficulty = campaignDifficultyMultiplier(save);
  const strategyMap = {
    conservative: { growth:.72, cost:.62, risk:.58, burnout:.48 },
    balanced: { growth:1, cost:1, risk:1, burnout:1 },
    aggressive: { growth:1.42, cost:1.55, risk:1.48, burnout:1.42 },
    artistic: { growth:.9, cost:.88, risk:.82, burnout:.78 }
  };
  const cfg = strategyMap[strategy] || strategyMap.balanced;
  const releases = save.release?.published?.length || 0;
  const shows = save.liveShow?.history?.length || 0;
  const staffCount = (save.staff || []).filter(x => x.hired).length;
  const weeklyGross = Math.max(900, releases*2100 + shows*950 + m.social.hype*44 + m.readiness*35);
  const weeklyCost = Math.max(700, staffCount*1250 + 1600) * cfg.cost;
  const projectedNet = Math.round((weeklyGross*cfg.growth - weeklyCost) * weeks * difficulty);
  const projectedFans = Math.max(0, Math.round((220 + m.social.hype*18 + m.readiness*13 + releases*260) * weeks * cfg.growth * difficulty));
  const projectedXp = Math.max(0, Math.round((BALANCE.weeklyBaseXp + m.readiness*5 + shows*35) * weeks * cfg.growth));
  const risk = clamp(Math.round((100-campaign.stability)*.42 + campaign.burnout*.38 + weeks*.36*cfg.risk - staffCount*2.2));
  const burnout = clamp(Math.round(campaign.burnout + weeks*.52*cfg.burnout - staffCount*.9));
  return { weeks, strategy, projectedNet, projectedFans, projectedXp, risk, burnout, readiness:m.readiness, weeklyGross:Math.round(weeklyGross), weeklyCost:Math.round(weeklyCost) };
}

function campaignMilestone(save) {
  const fans = Number(save.band?.fans || 0), xp = Number(save.band?.xp || 0), cash = Number(save.band?.cash || 0);
  if (fans >= 1000000 || xp >= 250000) return 'Lenda mundial';
  if (fans >= 250000 || xp >= 100000) return 'Turnê mundial';
  if (fans >= 75000 || xp >= 60000) return 'Carreira internacional';
  if (fans >= 25000 || xp >= 25000) return 'Artista nacional';
  if (fans >= 10000 || cash >= 1000000) return 'Destaque regional';
  return 'Cena local';
}

function renderLongCampaign() {
  const save = ensureSave();
  save.longCampaign = save.longCampaign || createLongCampaignState();
  const p = campaignProjection(save);
  const campaign = save.longCampaign;
  $('#campaignSeason') && ($('#campaignSeason').textContent = String(campaign.season || 1));
  $('#campaignWeeksDone') && ($('#campaignWeeksDone').textContent = String(campaign.simulatedWeeks || 0));
  $('#campaignMilestone') && ($('#campaignMilestone').textContent = campaignMilestone(save));
  $('#campaignCashProjection') && ($('#campaignCashProjection').textContent = `${p.projectedNet >= 0 ? '+' : '-'}${formatCurrencyLocalized(Math.abs(p.projectedNet))}`);
  $('#campaignFansProjection') && ($('#campaignFansProjection').textContent = '+' + formatNumberLocalized(p.projectedFans));
  $('#campaignXpProjection') && ($('#campaignXpProjection').textContent = '+' + formatNumberLocalized(p.projectedXp));
  $('#campaignRisk') && ($('#campaignRisk').textContent = p.risk + '%');
  $('#campaignBurnout') && ($('#campaignBurnout').textContent = p.burnout + '%');
  $('#campaignStability') && ($('#campaignStability').textContent = clamp(campaign.stability) + '%');
  $('#campaignHorizon') && ($('#campaignHorizon').value = String(campaign.horizon || 12));
  $('#campaignStrategy') && ($('#campaignStrategy').value = campaign.strategy || 'balanced');
  const narrative = p.risk > 70 ? 'Plano muito arriscado: reduza o horizonte ou adote estratégia conservadora.' : p.projectedNet < 0 ? 'Crescimento possível, mas o caixa pode entrar no vermelho. Faça shows e reduza custos.' : 'Projeção sustentável: a banda pode crescer mantendo caixa, reputação e saúde da equipe.';
  $('#campaignNarrative') && ($('#campaignNarrative').textContent = narrative);
  const list = $('#campaignHistory');
  if (list) {
    list.innerHTML = '';
    (campaign.history || []).slice(0, 8).forEach(item => {
      const row = document.createElement('div'); row.className = 'song-row';
      row.innerHTML = `<strong>${item.title}</strong><span>${item.text}</span>`; list.appendChild(row);
    });
    if (!(campaign.history || []).length) list.innerHTML = '<p class="muted">Nenhuma temporada longa simulada ainda.</p>';
  }
}

function persistCampaignControls() {
  const save = ensureSave(); save.longCampaign = save.longCampaign || createLongCampaignState();
  save.longCampaign.horizon = Number($('#campaignHorizon')?.value || save.longCampaign.horizon || 12);
  save.longCampaign.strategy = $('#campaignStrategy')?.value || save.longCampaign.strategy || 'balanced';
  saveGame(save); renderLongCampaign();
}

function simulateLongCampaign() {
  const save = ensureSave(); save.longCampaign = save.longCampaign || createLongCampaignState();
  persistCampaignControls();
  const p = campaignProjection(save), campaign = save.longCampaign;
  const randomSwing = .86 + Math.random()*.28;
  const setback = Math.random()*100 < p.risk;
  const cashDelta = Math.round(p.projectedNet * randomSwing * (setback ? .52 : 1));
  const fanDelta = Math.round(p.projectedFans * randomSwing * (setback ? .62 : 1));
  const xpDelta = Math.round(p.projectedXp * (setback ? .72 : 1));
  save.band.cash = Math.max(0, Math.round((save.band.cash || 0) + cashDelta));
  save.band.fans = Math.max(0, Math.round((save.band.fans || 0) + fanDelta));
  save.band.xp = Math.max(0, Math.round((save.band.xp || 0) + xpDelta));
  save.core = save.core || createCoreGameplayState();
  save.core.careerWeek = (save.core.careerWeek || 1) + p.weeks;
  campaign.simulatedWeeks = (campaign.simulatedWeeks || 0) + p.weeks;
  campaign.season = 1 + Math.floor(campaign.simulatedWeeks / 52);
  campaign.burnout = clamp(p.burnout + (setback ? 8 : -3));
  campaign.stability = clamp((campaign.stability || 58) + (cashDelta >= 0 ? 4 : -9) + (setback ? -7 : 3));
  campaign.momentum = clamp((campaign.momentum || 44) + (fanDelta > p.projectedFans*.75 ? 7 : -5) - (setback ? 9 : 0));
  const milestone = campaignMilestone(save);
  if (!campaign.milestones.includes(milestone)) campaign.milestones.push(milestone);
  campaign.lastProjection = { ...p, cashDelta, fanDelta, xpDelta, setback, at:nowISO() };
  campaign.history = [{
    title: setback ? `Temporada ${campaign.season}: crise controlada` : `Temporada ${campaign.season}: crescimento`,
    text: `${p.weeks} semanas • caixa ${cashDelta>=0?'+':''}${formatCurrencyLocalized(cashDelta)} • fãs +${formatNumberLocalized(fanDelta)} • XP +${formatNumberLocalized(xpDelta)} • marco ${milestone}`,
    at:nowISO()
  }, ...(campaign.history || [])].slice(0, 20);
  if ((save.band.xp || 0) > 10000) save.band.reputation = 'Regional';
  if ((save.band.xp || 0) > 25000) save.band.reputation = 'Nacional';
  if ((save.band.xp || 0) > 60000) save.band.reputation = 'Internacional';
  if ((save.band.xp || 0) > 150000) save.band.reputation = 'Lendária';
  syncWorldRanking(save, true);
  save.systems = { ...(save.systems || {}), phase13LongCampaign: true, commercialBalance: true, phase14WorldRanking: true, annualAwards: true, persistentRivals: true };
  updateCoreProgress(save, `Campanha longa simulada por ${p.weeks} semanas`);
  saveGame(save); syncProfileToUI(save); renderLongCampaign(); renderCoreGameplay(); playUiTone(setback ? 'error' : 'success');
}

function recoverCampaignTeam() {
  const save = ensureSave(); save.longCampaign = save.longCampaign || createLongCampaignState();
  const cost = 25000;
  if ((save.band.cash || 0) < cost) { playUiTone('error'); return; }
  save.band.cash -= cost;
  save.longCampaign.burnout = clamp((save.longCampaign.burnout || 0) - 24);
  save.longCampaign.stability = clamp((save.longCampaign.stability || 0) + 12);
  save.longCampaign.history = [{ title:'Pausa estratégica', text:`Equipe recuperada por ${formatCurrencyLocalized(cost)}. Burnout reduzido e estabilidade ampliada.`, at:nowISO() }, ...(save.longCampaign.history || [])].slice(0,20);
  saveGame(save); renderLongCampaign(); syncProfileToUI(save);
}

function createDefaultSave() {

  return {
    version: BUILD_VERSION,
    buildName: BUILD_NAME,
    player: { name: 'River Crow', country: 'Brasil', city: 'Sao Paulo/SP', avatar: 'male_01', level: 1, xp: 180, traits: ['Carismatico'] },
    band: { name: 'River Crow', logo: 'crown', formation: 'Quarteto', genre: 'Rock Alternativo', city: 'Sao Paulo/SP', cash: 2350500, xp: 7850, fans: 12450, reputation: 'Local', members: createDefaultMembers() },
    staff: createStaffMarket(),
    composition: createCompositionState(),
    studio: createStudioState(),
    release: createReleaseState(),
    liveShow: createLiveShowState(),
    social: createSocialState(),
    economy: createEconomyState(),
    tour: createWorldTourState(),
    longCampaign: createLongCampaignState(),
    worldRanking: createWorldRankingState(),
    bandDynamics: createBandDynamicsState(),
    contracts: createContractsState(),
    systems: { antiBreak: true, safeMode: false, assetsMapped: true, forcedLandscape: true, phase2ProfileSystem: true, phase3BandSystem: true, phase4StaffSystem: true, phase5CompositionSystem: true, phase6StudioSystem: true, phase7ReleaseSystem: true, phase8LiveShowSystem: true, phase9SocialSystem: true, phase10EconomySystem: true, phase11WorldTourSystem: true, phase4CoreGameplay: true, phase6LiveTourSystem: true, phase7Internationalization: true, phase13LongCampaign: true, commercialBalance: true, phase14WorldRanking: true, annualAwards: true, persistentRivals: true, phase15BandDynamics: true, phase16Contracts: true, negotiations: true, sponsorships: true, coreLoop: true },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}


const SAVE_SYSTEM_VERSION = 3;
const SAVE_SLOT_PREFIX = 'bandLegacy:slot:';
const SAVE_INDEX_KEY = 'bandLegacy:saveIndex';
const ACTIVE_SLOT_KEY = 'bandLegacy:activeSlot';
const LEGACY_SAVE_KEY = 'bandLegacy:save';
const MAX_SAVE_SLOTS = 5;
let activeSlotId = SafeStore.get(ACTIVE_SLOT_KEY, 'slot_1');

function nowISO() { return new Date().toISOString(); }
function slotKey(slotId) { return SAVE_SLOT_PREFIX + slotId; }
function validSlotId(slotId) { return /^slot_[1-5]$/.test(String(slotId || '')); }
function getActiveSlot() { return validSlotId(activeSlotId) ? activeSlotId : 'slot_1'; }
function setActiveSlot(slotId) {
  activeSlotId = validSlotId(slotId) ? slotId : 'slot_1';
  SafeStore.set(ACTIVE_SLOT_KEY, activeSlotId);
  return activeSlotId;
}

function saveMetadata(save, slotId) {
  return {
    slotId,
    version: BUILD_VERSION,
    saveSystemVersion: SAVE_SYSTEM_VERSION,
    playerName: save?.player?.name || 'River Crow',
    bandName: save?.band?.name || save?.player?.name || 'River Crow',
    genre: save?.band?.genre || 'Rock Alternativo',
    country: save?.player?.country || 'Brasil',
    city: save?.player?.city || 'São Paulo/SP',
    cash: Number(save?.band?.cash || 0),
    fans: Number(save?.band?.fans || 0),
    xp: Number(save?.band?.xp || 0),
    reputation: save?.band?.reputation || 'Local',
    createdAt: save?.createdAt || nowISO(),
    updatedAt: save?.updatedAt || nowISO(),
    playtimeSeconds: Number(save?.meta?.playtimeSeconds || 0)
  };
}

function getSaveIndex() {
  const raw = SafeStore.json(SAVE_INDEX_KEY, []);
  const list = Array.isArray(raw) ? raw : [];
  return list.filter(item => item && validSlotId(item.slotId)).slice(0, MAX_SAVE_SLOTS);
}

function writeSaveIndex(list) {
  const clean = (Array.isArray(list) ? list : []).filter(item => item && validSlotId(item.slotId)).slice(0, MAX_SAVE_SLOTS);
  SafeStore.set(SAVE_INDEX_KEY, JSON.stringify(clean));
}

function updateSaveIndex(save, slotId) {
  const index = getSaveIndex().filter(item => item.slotId !== slotId);
  index.unshift(saveMetadata(save, slotId));
  writeSaveIndex(index);
}

function readSlot(slotId) {
  if (!validSlotId(slotId)) return null;
  return SafeStore.json(slotKey(slotId), null);
}

function writeSlot(slotId, save) {
  if (!validSlotId(slotId) || !save) return false;
  save.version = BUILD_VERSION;
  save.buildName = BUILD_NAME;
  save.saveSystemVersion = SAVE_SYSTEM_VERSION;
  save.updatedAt = nowISO();
  save.meta = { ...(save.meta || {}), activeSlot: slotId, autosave: true, lastScreen: SafeStore.get('bandLegacy:lastScreen', 'mainMenu') };
  const ok = SafeStore.set(slotKey(slotId), JSON.stringify(save));
  if (ok) {
    setActiveSlot(slotId);
    SafeStore.set(LEGACY_SAVE_KEY, JSON.stringify(save)); // compatibilidade com builds antigas
    updateSaveIndex(save, slotId);
    flashSaveStatus(tr('Salvo'));
  }
  return ok;
}

function deleteSlot(slotId) {
  if (!validSlotId(slotId)) return;
  SafeStore.remove(slotKey(slotId));
  writeSaveIndex(getSaveIndex().filter(item => item.slotId !== slotId));
  if (getActiveSlot() === slotId) setActiveSlot('slot_1');
  renderLoadGame();
}

function findFirstEmptySlot() {
  for (let i = 1; i <= MAX_SAVE_SLOTS; i++) {
    const id = 'slot_' + i;
    if (!readSlot(id)) return id;
  }
  return 'slot_1';
}

function migrateSaveShape(current) {
  const fallback = createDefaultSave();
  const migrated = {
    ...fallback,
    ...current,
    version: BUILD_VERSION,
    buildName: BUILD_NAME,
    saveSystemVersion: SAVE_SYSTEM_VERSION,
    player: { ...fallback.player, ...(current?.player || {}) },
    band: { ...fallback.band, ...(current?.band || {}), logo: current?.band?.logo || fallback.band.logo || 'crown' },
    systems: { ...fallback.systems, ...(current?.systems || {}), saveSlots: true, autosave: true, migration: true, phase3SaveSystem: true, phase3BandSystem: true, phase4StaffSystem: true, phase5CompositionSystem: true, phase6StudioSystem: true, phase7ReleaseSystem: true, phase8LiveShowSystem: true, phase9SocialSystem: true, phase10EconomySystem: true, phase11WorldTourSystem: true, phase4CoreGameplay: true, phase6LiveTourSystem: true, phase7Internationalization: true, phase13LongCampaign: true, commercialBalance: true, phase14WorldRanking: true, annualAwards: true, persistentRivals: true, phase15BandDynamics: true, phase16Contracts: true, negotiations: true, sponsorships: true, coreLoop: true },
    meta: { saveSystemVersion: SAVE_SYSTEM_VERSION, ...(current?.meta || {}) },
    updatedAt: nowISO()
  };
  if (!Array.isArray(migrated.band.members) || migrated.band.members.length === 0) migrated.band.members = createDefaultMembers();
  if (!Array.isArray(migrated.staff) || migrated.staff.length === 0) migrated.staff = createStaffMarket();
  if (!migrated.composition || typeof migrated.composition !== 'object') migrated.composition = createCompositionState();
  if (!Array.isArray(migrated.composition.templates) || migrated.composition.templates.length === 0) migrated.composition.templates = createCompositionTemplates();
  if (!migrated.studio || typeof migrated.studio !== 'object') migrated.studio = createStudioState();
  if (!migrated.release || typeof migrated.release !== 'object') migrated.release = createReleaseState();
  if (!migrated.liveShow || typeof migrated.liveShow !== 'object') migrated.liveShow = createLiveShowState();
  if (!migrated.social || typeof migrated.social !== 'object') migrated.social = createSocialState();
  if (!migrated.economy || typeof migrated.economy !== 'object') migrated.economy = createEconomyState();
  if (!migrated.longCampaign || typeof migrated.longCampaign !== 'object') migrated.longCampaign = createLongCampaignState();
  if (!migrated.worldRanking || typeof migrated.worldRanking !== 'object') migrated.worldRanking = createWorldRankingState();
  if (!migrated.bandDynamics || typeof migrated.bandDynamics !== 'object') migrated.bandDynamics = createBandDynamicsState();
  if (!migrated.contracts || typeof migrated.contracts !== 'object') migrated.contracts = createContractsState();
  if (!migrated.tour || typeof migrated.tour !== 'object') migrated.tour = createWorldTourState();
  if (!Array.isArray(migrated.studio.rooms) || migrated.studio.rooms.length === 0) migrated.studio.rooms = createStudioState().rooms;
  if (!Array.isArray(migrated.studio.releasedMasters)) migrated.studio.releasedMasters = [];
  return migrated;
}

function migrateLegacySaveIfNeeded() {
  const index = getSaveIndex();
  if (index.length) return;
  const legacy = SafeStore.json(LEGACY_SAVE_KEY, null);
  if (legacy && typeof legacy === 'object') {
    const migrated = migrateSaveShape(legacy);
    writeSlot('slot_1', migrated);
    setActiveSlot('slot_1');
  }
}

function ensureSave(slotId = getActiveSlot()) {
  migrateLegacySaveIfNeeded();
  const selectedSlot = validSlotId(slotId) ? slotId : getActiveSlot();
  const current = readSlot(selectedSlot) || SafeStore.json(LEGACY_SAVE_KEY, null);
  if (!current || typeof current !== 'object') {
    const fallback = createDefaultSave();
    fallback.meta = { saveSystemVersion: SAVE_SYSTEM_VERSION, activeSlot: selectedSlot, autosave: true };
    writeSlot(selectedSlot, fallback);
    return fallback;
  }
  const migrated = migrateSaveShape(current);
  writeSlot(selectedSlot, migrated);
  return migrated;
}

function saveGame(save, slotId = getActiveSlot()) {
  return writeSlot(slotId, save);
}

function flashSaveStatus(text = 'Autosave') {
  const el = $('#saveStatus');
  if (!el) return;
  const locale = I18N[currentLanguage]?.locale || 'pt-BR';
  el.textContent = `${tr(text)} • ${new Date().toLocaleTimeString(locale, { hour:'2-digit', minute:'2-digit' })}`;
  el.classList.add('pulse');
  setTimeout(() => el.classList.remove('pulse'), 600);
}

function formatSlotDate(iso) {
  if (!iso) return tr('sem data');
  try { return new Date(iso).toLocaleString(I18N[currentLanguage]?.locale || 'pt-BR', { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' }); } catch (_) { return iso; }
}

function startNewGame(slotId = findFirstEmptySlot()) {
  const save = createDefaultSave();
  save.createdAt = nowISO();
  save.updatedAt = nowISO();
  save.meta = { saveSystemVersion: SAVE_SYSTEM_VERSION, activeSlot: slotId, autosave: true, lastScreen: 'profileCareer' };
  writeSlot(slotId, save);
  syncProfileToUI(save);
  renderLoadGame();
  showScreen('profileCareer');
  flashSaveStatus(tr('Novo jogo'));
}

function continueGame() {
  migrateLegacySaveIfNeeded();
  const index = getSaveIndex();
  if (!index.length) { startNewGame('slot_1'); return; }
  const slotId = index[0].slotId;
  setActiveSlot(slotId);
  const save = ensureSave(slotId);
  syncProfileToUI(save);
  showScreen(save?.meta?.lastScreen && save.meta.lastScreen !== 'mainMenu' ? save.meta.lastScreen : 'lobby');
  flashSaveStatus('Carregado');
}

function loadSlot(slotId) {
  const slot = readSlot(slotId);
  if (!slot) { startNewGame(slotId); return; }
  setActiveSlot(slotId);
  const save = ensureSave(slotId);
  syncProfileToUI(save);
  renderLoadGame();
  showScreen('lobby');
  flashSaveStatus('Slot carregado');
}

function manualSave() {
  const save = ensureSave();
  save.meta = { ...(save.meta || {}), manualSavedAt: nowISO() };
  saveGame(save);
  renderLoadGame();
  flashSaveStatus('Save manual');
}

function resetActiveSave() {
  const slotId = getActiveSlot();
  const ok = window.confirm ? window.confirm('Apagar o save ativo e criar uma nova carreira neste slot?') : true;
  if (!ok) return;
  deleteSlot(slotId);
  startNewGame(slotId);
}

function renderLoadGame() {
  const list = $('#saveSlotList');
  if (!list) return;
  migrateLegacySaveIfNeeded();
  list.innerHTML = '';
  for (let i = 1; i <= MAX_SAVE_SLOTS; i++) {
    const slotId = 'slot_' + i;
    const save = readSlot(slotId);
    const meta = save ? saveMetadata(save, slotId) : null;
    const card = document.createElement('div');
    card.className = 'save-slot-card' + (getActiveSlot() === slotId ? ' active-slot' : '');
    card.innerHTML = meta ? `
      <div class="slot-title"><strong>Slot ${i}</strong><span>${meta.version}</span></div>
      <h2>${meta.bandName}</h2>
      <p>${meta.playerName} • ${meta.genre} • ${meta.city}</p>
      <div class="slot-metrics"><span>$ ${meta.cash.toLocaleString('pt-BR')}</span><span>★ ${meta.xp.toLocaleString('pt-BR')}</span><span>👥 ${meta.fans.toLocaleString('pt-BR')}</span><span>${meta.reputation}</span></div>
      <small>Atualizado: ${formatSlotDate(meta.updatedAt)}</small>
      <div class="slot-actions"><button data-load-slot="${slotId}" class="primary">Carregar</button><button data-new-slot="${slotId}">Novo neste slot</button><button data-delete-slot="${slotId}">Apagar</button></div>` : `
      <div class="slot-title"><strong>Slot ${i}</strong><span>Vazio</span></div>
      <h2>Nova carreira</h2>
      <p>Crie um save independente com autosave e migração de versão.</p>
      <div class="slot-actions"><button data-new-slot="${slotId}" class="primary">Criar novo jogo</button></div>`;
    list.appendChild(card);
  }
}

function syncProfileToUI(save) {
  const artist = save?.player?.name || 'River Crow';
  const city = save?.player?.city || 'Sao Paulo/SP';
  $('#playerName') && ($('#playerName').textContent = artist);
  $('#profileArtistInput') && ($('#profileArtistInput').value = artist);
  $('#profileCityInput') && ($('#profileCityInput').value = city);
  $('#artistInput') && ($('#artistInput').value = artist);
  $('#bandInput') && ($('#bandInput').value = save?.band?.name || artist);
  $('#bandNameInput') && ($('#bandNameInput').value = save?.band?.name || artist);
  $('#bandFormation') && ($('#bandFormation').value = save?.band?.formation || 'Quarteto');
  $('#bandGenre') && ($('#bandGenre').value = save?.band?.genre || 'Rock Alternativo');
  initAvatarChoices();
  $$('#avatarChoices button').forEach(b => b.classList.toggle('selected', b.dataset.avatar === (save?.player?.avatar || 'male_01')));
  applySelectedAvatarVisual(save);
}


function bandStats(save) {
  const members = save.band.members || [];
  const avg = key => Math.round(members.reduce((a,m)=>a+clamp(m[key]),0) / Math.max(1, members.length));
  const ego = avg('ego');
  const loyalty = avg('loyalty');
  const morale = avg('morale');
  const synergy = clamp(Math.round((avg('technique') + avg('creativity') + loyalty + morale - ego * 0.35) / 3.65));
  const creativity = avg('creativity');
  const energy = avg('stamina');
  const overall = clamp(Math.round((synergy + creativity + energy + avg('stagePresence') + avg('technique')) / 5));
  const risk = ego > 68 && loyalty < 55 ? 'Alto' : ego > 55 ? 'Medio' : 'Baixo';
  return { synergy, morale, creativity, energy, overall, risk };
}

function updateMetric(id, value) {
  const el = $(id);
  if (!el) return;
  el.textContent = value;
  const bar = el.parentElement?.querySelector('em');
  if (bar) bar.style.width = `${clamp(value)}%`;
}

function renderBand() {
  const save = ensureSave();
  initBandLogoUI();
  applyBandLogoVisual(save);
  syncProfileToUI(save);
  const stats = bandStats(save);
  $('#bandOverall') && ($('#bandOverall').textContent = stats.overall);
  updateMetric('#metricSynergy', stats.synergy);
  updateMetric('#metricMorale', stats.morale);
  updateMetric('#metricEnergy', stats.energy);
  updateMetric('#metricCreativity', stats.creativity);
  $('#riskConflict') && ($('#riskConflict').textContent = stats.risk);
  const narrative = stats.overall >= 80 ? 'A banda ja tem presenca de palco internacional. Falta apenas ampliar agenda e contratos.' : stats.overall >= 65 ? 'A banda tem potencial comercial claro, mas ainda precisa consolidar identidade e sinergia.' : 'A banda esta crua. O jogador precisa treinar, compor e controlar ego dos integrantes.';
  $('#bandNarrative') && ($('#bandNarrative').textContent = narrative);

  const grid = $('#membersGrid');
  if (!grid) return;
  grid.innerHTML = '';
  save.band.members.forEach((member, index) => {
    const card = document.createElement('button');
    card.className = 'member-card' + (index === selectedMemberIndex ? ' selected' : '');
    card.dataset.memberIndex = String(index);
    card.innerHTML = `<div class="member-photo" style="${assetStyle(memberImage(member, index), 'center top')}"></div><h3>${member.name}</h3><small>${member.role}</small><div class="member-bars">
      <span>Tecnica <i><em style="width:${clamp(member.technique)}%"></em></i></span>
      <span>Criatividade <i><em style="width:${clamp(member.creativity)}%"></em></i></span>
      <span>Palco <i><em style="width:${clamp(member.stagePresence)}%"></em></i></span>
      <span>Ego <i><em style="width:${clamp(member.ego)}%"></em></i></span>
    </div>`;
    grid.appendChild(card);
  });
  loadMemberEditor();
  setTimeout(() => forceOfficialAssetBindings(SafeStore.get('bandLegacy:lastScreen', 'band')), 60);
}

function loadMemberEditor() {
  const save = ensureSave();
  const member = save.band.members[selectedMemberIndex] || save.band.members[0];
  if (!member) return;
  $('#memberNameInput') && ($('#memberNameInput').value = member.name);
  $('#memberRoleInput') && ($('#memberRoleInput').value = member.role);
}

function persistProfile() {
  const save = ensureSave();
  save.player.name = $('#profileArtistInput')?.value || save.player.name;
  save.player.city = $('#profileCityInput')?.value || save.player.city;
  save.player.country = ($('#profileCountry')?.value || 'Brasil').replace(/^\S+\s/, '');
  save.player.avatar = $('#avatarChoices .selected')?.dataset.avatar || save.player.avatar;
  saveGame(save);
  syncProfileToUI(save);
  return save;
}

function persistBand() {
  const save = ensureSave();
  save.band.name = $('#bandNameInput')?.value || save.band.name;
  save.band.formation = $('#bandFormation')?.value || save.band.formation;
  save.band.genre = $('#bandGenre')?.value || save.band.genre;
  save.band.logo = document.querySelector('[data-logo-choice].selected')?.dataset.logoChoice || save.band.logo || 'crown';
  saveGame(save);
  renderBand();
}

function saveSelectedMember() {
  const save = ensureSave();
  const member = save.band.members[selectedMemberIndex] || save.band.members[0];
  if (!member) return;
  member.name = $('#memberNameInput')?.value || member.name;
  member.role = $('#memberRoleInput')?.value || member.role;
  member.morale = clamp(member.morale + 2);
  member.loyalty = clamp(member.loyalty + 1);
  saveGame(save);
  renderBand();
}

function randomizeMember() {
  const names = ['Raven Knox','Luna Voss','Nico Blaze','Iris Vale','Dante Riff','Mika Storm','Theo Black','Vera Night'];
  const roles = ['Vocalista','Guitarrista','Baixista','Baterista','Tecladista','DJ'];
  const save = ensureSave();
  const member = save.band.members[selectedMemberIndex] || save.band.members[0];
  if (!member) return;
  member.name = names[Math.floor(Math.random()*names.length)];
  member.role = roles[Math.floor(Math.random()*roles.length)];
  ['technique','creativity','stagePresence','stamina','ego','loyalty','morale'].forEach(k => member[k] = 45 + Math.floor(Math.random()*45));
  saveGame(save);
  renderBand();
}


function renderStaff() {
  const save = ensureSave();
  if (!Array.isArray(save.staff)) save.staff = createStaffMarket();
  const impact = staffImpact(save.staff);
  $('#staffCount') && ($('#staffCount').textContent = impact.hiredCount);
  $('#staffPayroll') && ($('#staffPayroll').textContent = '$ ' + impact.payroll.toLocaleString('pt-BR'));
  updateMetric('#metricStaffPower', impact.staffPower);
  updateMetric('#metricNegotiation', impact.negotiation);
  updateMetric('#metricMarketing', impact.marketing);
  updateMetric('#metricProduction', impact.production);
  updateMetric('#metricLogistics', impact.logistics);
  updateMetric('#metricScouting', impact.scouting);
  const narrative = impact.hiredCount === 0 ? 'Sem staff contratado. A banda economiza dinheiro, mas perde velocidade comercial.' : impact.staffPower >= 75 ? 'Equipe profissional forte. A carreira já pode buscar festivais, contratos e turnês maiores.' : 'Staff funcional, mas ainda incompleto para carreira internacional.';
  $('#staffNarrative') && ($('#staffNarrative').textContent = narrative);
  const grid = $('#staffGrid');
  if (!grid) return;
  grid.innerHTML = '';
  save.staff.forEach(person => {
    const card = document.createElement('button');
    card.className = 'staff-card' + (person.hired ? ' hired' : '');
    card.dataset.staffId = person.id;
    card.innerHTML = `<div class="staff-avatar" style="${assetStyle(staffImage(person), 'center top')}"></div><h3>${person.name}</h3><small>${person.role} • ${person.tier}</small><p>${person.description}</p><div class="staff-money"><span>Salário: $ ${Number(person.salary).toLocaleString('pt-BR')}/mês</span><span>Assinatura: $ ${Number(person.signing).toLocaleString('pt-BR')}</span></div><div class="staff-mini-bars"><span>Negociação <i><em style="width:${clamp(person.negotiation)}%"></em></i></span><span>Marketing <i><em style="width:${clamp(person.marketing)}%"></em></i></span><span>Produção <i><em style="width:${clamp(person.production)}%"></em></i></span><span>Logística <i><em style="width:${clamp(person.logistics)}%"></em></i></span></div><strong>${person.hired ? 'CONTRATADO' : 'CONTRATAR'}</strong>`;
    grid.appendChild(card);
  });
  setTimeout(() => forceOfficialAssetBindings(SafeStore.get('bandLegacy:lastScreen', 'staff')), 60);
}

function toggleStaff(id) {
  const save = ensureSave();
  const person = (save.staff || []).find(s => s.id === id);
  if (!person) return reportIssue('STAFF_NOT_FOUND', new Error(id));
  if (!person.hired) {
    const cost = Number(person.signing) || 0;
    if ((save.band.cash || 0) < cost) {
      reportIssue('STAFF_CASH_GUARD', new Error('Caixa insuficiente para contratação'), { id, cost });
      $('#staffNarrative') && ($('#staffNarrative').textContent = 'Caixa insuficiente. Faça shows ou grave singles antes de contratar esse profissional.');
      return;
    }
    save.band.cash -= cost;
    person.hired = true;
  } else {
    person.hired = false;
  }
  saveGame(save);
  renderStaff();
}

function staffMonthSimulation() {
  const save = ensureSave();
  const impact = staffImpact(save.staff || []);
  save.band.cash = Math.max(0, (save.band.cash || 0) - impact.payroll + Math.round(impact.marketing * 120 + impact.negotiation * 80));
  save.band.fans = Math.round((save.band.fans || 0) + impact.marketing * 18 + impact.staffPower * 8);
  save.band.xp = Math.round((save.band.xp || 0) + impact.staffPower * 4);
  saveGame(save);
  $('#staffNarrative') && ($('#staffNarrative').textContent = `Mês simulado: folha paga, marketing gerou fãs e o staff adicionou ${impact.staffPower * 4} XP de carreira.`);
  renderStaff();
}

function renderComposition() {
  const save = ensureSave();
  if (!save.composition) save.composition = createCompositionState();
  const c = save.composition;
  const scores = compositionScores(save);
  $('#songTitleInput') && ($('#songTitleInput').value = c.activeSong.title || 'Nova Música');
  $('#songGenreSelect') && ($('#songGenreSelect').value = c.activeSong.genre || 'Rock Alternativo');
  $('#songThemeInput') && ($('#songThemeInput').value = c.activeSong.theme || 'superação');
  $('#songBpmInput') && ($('#songBpmInput').value = c.activeSong.bpm || 128);
  $('#songKeySelect') && ($('#songKeySelect').value = c.activeSong.key || 'Em');
  $('#songIntensityInput') && ($('#songIntensityInput').value = c.activeSong.intensity ?? 68);
  $('#songStructureSelect') && ($('#songStructureSelect').value = c.activeSong.structure || 'Intro • Verso • Refrão • Solo • Final');
  $('#songLyricInput') && ($('#songLyricInput').value = c.activeSong.lyric || 'Letra sobre superar a noite, vencer o medo e tocar para uma arena lotada.');
  $('#compositionPartsCount') && ($('#compositionPartsCount').textContent = scores.partsCount);
  updateMetric('#metricSongQuality', scores.quality);
  updateMetric('#metricHitPotential', scores.hit);
  updateMetric('#metricOriginality', scores.originality);
  updateMetric('#metricEmotion', scores.emotion);
  $('#compositionNarrative') && ($('#compositionNarrative').textContent = scores.hit >= 80 ? 'A música tem cheiro de single internacional. Invista em estúdio, marketing e lançamento forte.' : scores.quality >= 65 ? 'A faixa é promissora. Mais uma parte forte pode transformar a composição em single.' : 'A ideia ainda parece crua. Combine riff, refrão, letra e emoção antes de gravar.');
  const grid = $('#compositionPartsGrid');
  if (grid) {
    grid.innerHTML = '';
    c.templates.forEach(part => {
      const active = (c.activeSong.parts || []).includes(part.id);
      const card = document.createElement('button');
      card.className = 'composition-part' + (active ? ' selected' : '');
      card.dataset.partId = part.id;
      card.innerHTML = `<h3>${part.name}</h3><small>${part.type} • ${part.genre}</small><div class="staff-mini-bars"><span>Energia <i><em style="width:${clamp(part.energy)}%"></em></i></span><span>Comercial <i><em style="width:${clamp(part.commercial)}%"></em></i></span><span>Originalidade <i><em style="width:${clamp(part.originality)}%"></em></i></span><span>Emoção <i><em style="width:${clamp(part.emotion)}%"></em></i></span></div><strong>${active ? 'NA MÚSICA' : 'ADICIONAR'}</strong>`;
      grid.appendChild(card);
    });
  }
  const lib = $('#songLibraryList');
  if (lib) {
    lib.innerHTML = '';
    (c.library || []).slice(-6).reverse().forEach(song => {
      const row = document.createElement('div');
      row.className = 'song-row';
      row.innerHTML = `<strong>${song.title}</strong><span>Q${song.quality} • Hit ${song.hit} • ${song.genre}</span>`;
      lib.appendChild(row);
    });
    if (!c.library?.length) lib.innerHTML = '<p class="muted">Nenhuma música finalizada ainda.</p>';
  }
}

function persistCompositionMeta() {
  const save = ensureSave();
  if (!save.composition) save.composition = createCompositionState();
  save.composition.activeSong.title = $('#songTitleInput')?.value || save.composition.activeSong.title;
  save.composition.activeSong.genre = $('#songGenreSelect')?.value || save.composition.activeSong.genre;
  save.composition.activeSong.theme = $('#songThemeInput')?.value || save.composition.activeSong.theme;
  save.composition.activeSong.bpm = clamp($('#songBpmInput')?.value || save.composition.activeSong.bpm || 128, 70, 190);
  save.composition.activeSong.key = $('#songKeySelect')?.value || save.composition.activeSong.key || 'Em';
  save.composition.activeSong.intensity = clamp($('#songIntensityInput')?.value ?? save.composition.activeSong.intensity ?? 68);
  save.composition.activeSong.structure = $('#songStructureSelect')?.value || save.composition.activeSong.structure || 'Intro • Verso • Refrão • Solo • Final';
  save.composition.activeSong.lyric = $('#songLyricInput')?.value || save.composition.activeSong.lyric || ''; 
  saveGame(save);
  renderComposition();
}

function toggleCompositionPart(id) {
  const save = ensureSave();
  const c = save.composition || createCompositionState();
  c.activeSong.parts = Array.isArray(c.activeSong.parts) ? c.activeSong.parts : [];
  if (c.activeSong.parts.includes(id)) c.activeSong.parts = c.activeSong.parts.filter(x => x !== id);
  else c.activeSong.parts.push(id);
  c.activeSong.parts = c.activeSong.parts.slice(0, 6);
  save.composition = c;
  saveGame(save);
  renderComposition();
}

function finishSongDraft() {
  const save = ensureSave();
  const c = save.composition || createCompositionState();
  const scores = compositionScores(save);
  const song = { title:c.activeSong.title || 'Untitled Song', genre:c.activeSong.genre || 'Rock', theme:c.activeSong.theme || 'vida na estrada', bpm:c.activeSong.bpm || 128, key:c.activeSong.key || 'Em', intensity:c.activeSong.intensity ?? 68, structure:c.activeSong.structure || 'Intro • Verso • Refrão • Solo • Final', lyric:c.activeSong.lyric || '', quality:scores.quality, hit:scores.hit, originality:scores.originality, emotion:scores.emotion, createdAt:new Date().toISOString() };
  c.library = Array.isArray(c.library) ? c.library : [];
  c.library.push(song);
  c.lastResult = song;
  c.inspiration = clamp(c.inspiration - 8 + Math.round(scores.emotion/12));
  c.activeSong = { title:'Nova Faixa ' + String(c.library.length + 1).padStart(2,'0'), genre:c.activeSong.genre, theme:'legado', bpm:124, key:'Am', intensity:60, structure:'Intro • Verso • Pré-Refrão • Refrão • Ponte • Refrão', lyric:'', parts:[], takes:1, budget:25000 };
  save.band.xp = Math.round((save.band.xp || 0) + scores.quality * 8);
  save.band.fans = Math.round((save.band.fans || 0) + scores.hit * 16);
  save.composition = c;
  saveGame(save);
  $('#compositionNarrative') && ($('#compositionNarrative').textContent = `Música finalizada: ${song.title}. Qualidade ${song.quality}, potencial de hit ${song.hit}.`);
  renderComposition();
}

function improveSong() {
  const save = ensureSave();
  const c = save.composition || createCompositionState();
  const libraryBoost = (c.activeSong.parts || []).length < 4;
  const available = (c.templates || []).filter(t => !(c.activeSong.parts || []).includes(t.id));
  if (libraryBoost && available.length) c.activeSong.parts.push(available.sort((a,b)=>(b.commercial+b.emotion)-(a.commercial+a.emotion))[0].id);
  c.activeSong.intensity = clamp((c.activeSong.intensity ?? 68) + 8);
  c.activeSong.lyric = (c.activeSong.lyric || 'Letra em desenvolvimento.') + ' Refrão mais memorável, ponte emocional e assinatura da banda reforçada.';
  c.inspiration = clamp((c.inspiration || 50) - 4);
  save.composition = c;
  saveGame(save);
  renderComposition();
}

function generateSongIdea() {
  const save = ensureSave();
  const titles = ['Neon Bloodline','Backstage Saints','Golden Riot','Last Stage Lights','Broken Arena','Midnight Legacy','City of Feedback','Electric Faith'];
  const themes = ['superação','caos artístico','amor e estrada','fama perigosa','recomeço','rebeldia','fé no palco','solidão na turnê'];
  const c = save.composition || createCompositionState();
  c.activeSong.title = titles[Math.floor(Math.random()*titles.length)];
  c.activeSong.theme = themes[Math.floor(Math.random()*themes.length)];
  c.activeSong.bpm = 90 + Math.floor(Math.random()*80);
  c.activeSong.key = ['Em','Am','Dm','G','A','C','D','F#m','Bm'][Math.floor(Math.random()*9)];
  c.activeSong.intensity = 45 + Math.floor(Math.random()*45);
  c.activeSong.lyric = `Direção: ${c.activeSong.theme}, refrão forte, imagem de palco e tensão emocional crescente.`;
  c.inspiration = clamp(c.inspiration + 6);
  save.composition = c;
  saveGame(save);
  renderComposition();
}



function renderStudio() {
  const save = ensureSave();
  if (!save.studio) save.studio = createStudioState();
  const studio = save.studio;
  const candidates = studioProjectCandidates(save);
  if (studio.activeProjectIndex >= candidates.length) studio.activeProjectIndex = 0;
  const scores = studioScores(save);
  $('#studioProjectCount') && ($('#studioProjectCount').textContent = candidates.length);
  $('#studioBudgetInput') && ($('#studioBudgetInput').value = studio.budget || 45000);
  $('#studioTakesInput') && ($('#studioTakesInput').value = studio.takes || 1);
  $('#studioMixInput') && ($('#studioMixInput').value = studio.mix || 45);
  $('#studioMasterInput') && ($('#studioMasterInput').value = studio.master || 35);
  $('#studioProducerSelect') && ($('#studioProducerSelect').value = studio.selectedProducer || 'internal');
  $('#studioSonicDirection') && ($('#studioSonicDirection').value = studio.sonicDirection || 'balanced');
  const wave = $('#waveformPreview');
  if (wave) Array.from(wave.children).forEach((bar, idx) => { bar.style.height = (18 + ((scores.finalQuality + scores.radio + idx*13) % 68)) + '%'; });
  updateMetric('#metricStudioQuality', scores.finalQuality);
  updateMetric('#metricStudioRadio', scores.radio);
  updateMetric('#metricStudioAuthenticity', scores.authenticity);
  updateMetric('#metricStudioRisk', scores.productionRisk);
  $('#studioCost') && ($('#studioCost').textContent = '$ ' + scores.cost.toLocaleString('pt-BR'));
  $('#studioNarrative') && ($('#studioNarrative').textContent = scores.finalQuality >= 82 ? 'Som de lançamento internacional. Esta master já pode sustentar campanha forte e turnê.' : scores.productionRisk > 55 ? 'Produção arriscada: faltam orçamento, staff ou estúdio melhor. O anti-quebra vai impedir travamento, mas a carreira pode sofrer.' : 'Projeto em produção. Ajuste takes, mix, master e sala para equilibrar custo, qualidade e autenticidade.');
  const projectList = $('#studioProjectList');
  if (projectList) {
    projectList.innerHTML = '';
    candidates.forEach((song, index) => {
      const btn = document.createElement('button');
      btn.className = 'studio-project' + (index === studio.activeProjectIndex ? ' selected' : '');
      btn.dataset.studioProjectIndex = String(index);
      btn.innerHTML = `<strong>${song.title}</strong><span>${song.genre || 'Rock'} • Demo Q${song.quality || 50} • Hit ${song.hit || 45}</span>`;
      projectList.appendChild(btn);
    });
  }
  const roomGrid = $('#studioRoomGrid');
  if (roomGrid) {
    roomGrid.innerHTML = '';
    (studio.rooms || []).forEach(room => {
      const btn = document.createElement('button');
      btn.className = 'studio-room' + (room.id === studio.selectedRoom ? ' selected' : '');
      btn.dataset.studioRoomId = room.id;
      btn.innerHTML = `<h3>${room.name}</h3><small>${room.tier} • $ ${room.cost.toLocaleString('pt-BR')}</small><p>${room.description}</p><div class="staff-mini-bars"><span>Qualidade <i><em style="width:${clamp(room.quality)}%"></em></i></span><span>Vibe <i><em style="width:${clamp(room.vibe)}%"></em></i></span><span>Velocidade <i><em style="width:${clamp(room.speed)}%"></em></i></span><span>Risco <i><em style="width:${clamp(room.risk)}%"></em></i></span></div>`;
      roomGrid.appendChild(btn);
    });
  }
  const masters = $('#releasedMastersList');
  if (masters) {
    masters.innerHTML = '';
    (studio.releasedMasters || []).slice(-5).reverse().forEach(master => {
      const row = document.createElement('div');
      row.className = 'song-row';
      row.innerHTML = `<strong>${master.title}</strong><span>Master Q${master.finalQuality} • Rádio ${master.radio} • ${master.producer || master.room} • Custo $ ${Number(master.cost).toLocaleString('pt-BR')}</span>`;
      masters.appendChild(row);
    });
    if (!studio.releasedMasters?.length) masters.innerHTML = '<p class="muted">Nenhuma master finalizada ainda. Grave uma demo no estúdio.</p>';
  }
}

function persistStudioControls() {
  const save = ensureSave();
  if (!save.studio) save.studio = createStudioState();
  save.studio.budget = clamp($('#studioBudgetInput')?.value || save.studio.budget, 5000, 250000);
  save.studio.takes = clamp($('#studioTakesInput')?.value || save.studio.takes, 1, 10);
  save.studio.mix = clamp($('#studioMixInput')?.value || save.studio.mix, 0, 100);
  save.studio.master = clamp($('#studioMasterInput')?.value || save.studio.master, 0, 100);
  save.studio.selectedProducer = $('#studioProducerSelect')?.value || save.studio.selectedProducer || 'internal';
  save.studio.sonicDirection = $('#studioSonicDirection')?.value || save.studio.sonicDirection || 'balanced';
  saveGame(save);
  renderStudio();
}

function selectStudioProject(index) {
  const save = ensureSave();
  save.studio = save.studio || createStudioState();
  save.studio.activeProjectIndex = clamp(index, 0, Math.max(0, studioProjectCandidates(save).length - 1));
  saveGame(save);
  renderStudio();
}

function selectStudioRoom(id) {
  const save = ensureSave();
  save.studio = save.studio || createStudioState();
  if ((save.studio.rooms || []).some(r => r.id === id)) save.studio.selectedRoom = id;
  saveGame(save);
  renderStudio();
}

function autoTuneStudio() {
  const save = ensureSave();
  save.studio = save.studio || createStudioState();
  const cash = save.band.cash || 0;
  save.studio.selectedRoom = cash > 500000 ? 'arena_room' : cash > 90000 ? 'indie_room' : 'garage_room';
  save.studio.takes = cash > 140000 ? 4 : 2;
  save.studio.mix = cash > 140000 ? 72 : 54;
  save.studio.master = cash > 140000 ? 68 : 46;
  save.studio.budget = cash > 500000 ? 120000 : cash > 90000 ? 52000 : 16000;
  save.studio.selectedProducer = cash > 500000 ? 'metal' : cash > 140000 ? 'radio' : cash > 90000 ? 'vintage' : 'internal';
  save.studio.sonicDirection = cash > 500000 ? 'cinematic' : cash > 140000 ? 'polished' : 'raw';
  saveGame(save);
  renderStudio();
}

function simulateStudioTake() {
  const save = ensureSave();
  save.studio = save.studio || createStudioState();
  const scores = studioScores(save);
  const take = { at:new Date().toISOString(), quality:scores.finalQuality, radio:scores.radio, risk:scores.productionRisk };
  save.studio.takeHistory = Array.isArray(save.studio.takeHistory) ? save.studio.takeHistory : [];
  save.studio.takeHistory.push(take);
  save.studio.takes = clamp((save.studio.takes || 1) + 1, 1, 10);
  save.band.xp = Math.round((save.band.xp || 0) + Math.max(8, scores.finalQuality / 2));
  saveGame(save);
  $('#studioNarrative') && ($('#studioNarrative').textContent = `Take gravado: qualidade ${take.quality}, rádio ${take.radio}, risco ${take.risk}.`);
  renderStudio();
}

function finishStudioMaster() {
  const save = ensureSave();
  save.studio = save.studio || createStudioState();
  const scores = studioScores(save);
  if ((save.band.cash || 0) < scores.cost) {
    reportIssue('STUDIO_CASH_GUARD', new Error('Caixa insuficiente para finalizar master'), { cost:scores.cost });
    $('#studioNarrative') && ($('#studioNarrative').textContent = 'Caixa insuficiente para finalizar a master. Reduza orçamento/sala ou faça shows primeiro.');
    return;
  }
  const master = { title:scores.song.title, genre:scores.song.genre || 'Rock', bpm:scores.song.bpm || 128, key:scores.song.key || 'Em', room:scores.room.name, producer:scores.producer.name, sonicDirection:scores.direction, finalQuality:scores.finalQuality, radio:scores.radio, authenticity:scores.authenticity, risk:scores.productionRisk, cost:scores.cost, createdAt:new Date().toISOString() };
  save.band.cash = Math.max(0, (save.band.cash || 0) - scores.cost);
  save.band.xp = Math.round((save.band.xp || 0) + scores.finalQuality * 12 + scores.radio * 4);
  save.band.fans = Math.round((save.band.fans || 0) + scores.radio * 20 + scores.authenticity * 8);
  save.studio.releasedMasters = Array.isArray(save.studio.releasedMasters) ? save.studio.releasedMasters : [];
  save.studio.releasedMasters.push(master);
  saveGame(save);
  $('#studioNarrative') && ($('#studioNarrative').textContent = `Master finalizada: ${master.title}. Qualidade ${master.finalQuality}, rádio ${master.radio}, autenticidade ${master.authenticity}.`);
  renderStudio();
}


function createReleaseState() {
  return {
    activeMasterIndex: 0,
    format: 'Single',
    platform: 'Global Stream',
    marketing: 55000,
    video: 35,
    pr: 45,
    window: 'normal',
    pricing: 'standard',
    published: [],
    reviews: []
  };
}

function releaseMasterCandidates(save) {
  const masters = save?.studio?.releasedMasters || [];
  if (masters.length) return masters;
  const candidates = studioProjectCandidates(save);
  return candidates.map(song => ({
    title: song.title || 'Last Stage Lights',
    genre: song.genre || 'Rock Alternativo',
    finalQuality: song.finalQuality || song.quality || 58,
    radio: song.radio || song.hit || 52,
    authenticity: song.authenticity || song.originality || 65,
    risk: 18,
    provisional: true
  }));
}

function platformModifier(platform) {
  const map = {
    'Global Stream': { hype: 10, streams: 18, critics: 2, chart: 12, cost: 1.0 },
    'RockWave': { hype: 14, streams: 8, critics: 10, chart: 8, cost: .85 },
    'ClipTube': { hype: 20, streams: 12, critics: -2, chart: 10, cost: 1.15 },
    'Indie Radar': { hype: 8, streams: 2, critics: 18, chart: 4, cost: .72 },
    'Radio Network': { hype: 6, streams: 10, critics: 4, chart: 18, cost: .95 }
  };
  return map[platform] || map['Global Stream'];
}

function releaseScores(save) {
  const release = save.release || createReleaseState();
  const masters = releaseMasterCandidates(save);
  const master = masters[clamp(release.activeMasterIndex, 0, Math.max(0, masters.length - 1))] || masters[0];
  const staff = staffImpact(save.staff || []);
  const band = bandStats(save);
  const mod = platformModifier(release.platform);
  const marketingScore = clamp((Number(release.marketing)||0) / 3000, 0, 100);
  const videoScore = clamp(release.video || 0);
  const prScore = clamp(release.pr || 0);
  const windowMod = { normal:{hype:0,streams:0,cost:1}, festival:{hype:12,streams:8,cost:1.12}, holiday:{hype:7,streams:15,cost:1.18}, quiet:{hype:-2,streams:5,cost:.86} }[release.window || 'normal'] || {hype:0,streams:0,cost:1};
  const priceMod = { standard:{streams:0, revenue:1}, premium:{streams:-8, revenue:1.35}, viral:{streams:16, revenue:.72} }[release.pricing || 'standard'] || {streams:0, revenue:1};
  const baseQuality = clamp(master.finalQuality || 50);
  const baseRadio = clamp(master.radio || 45);
  const authenticity = clamp(master.authenticity || 50);
  const hype = clamp(Math.round(baseRadio*.28 + marketingScore*.26 + videoScore*.18 + staff.marketing*.14 + band.reputation?.length + mod.hype + windowMod.hype));
  const streams = clamp(Math.round(baseRadio*.38 + hype*.30 + marketingScore*.17 + staff.marketing*.10 + mod.streams + windowMod.streams + priceMod.streams));
  const critics = clamp(Math.round(baseQuality*.42 + authenticity*.24 + prScore*.18 + staff.production*.08 + mod.critics));
  const chart = clamp(Math.round(streams*.36 + hype*.26 + critics*.16 + baseRadio*.16 + mod.chart));
  const cost = Math.round(((Number(release.marketing)||0) * mod.cost + videoScore * 950 + prScore * 720 + (release.format === 'Álbum' ? 65000 : release.format === 'EP' ? 28000 : 12000)) * windowMod.cost);
  const projectedStreams = Math.max(1500, Math.round((streams * 3200) + (hype * 1900) + (save.band.fans || 0) * (release.format === 'Álbum' ? 1.8 : 1.1)));
  const projectedRevenue = Math.round((projectedStreams * 0.018 + chart * 420 + critics * 180) * priceMod.revenue);
  return { release, master, staff, band, mod, hype, streams, critics, chart, cost, projectedStreams, projectedRevenue };
}

function renderRelease() {
  const save = ensureSave();
  save.release = save.release || createReleaseState();
  const release = save.release;
  const scores = releaseScores(save);
  $('#releaseCount') && ($('#releaseCount').textContent = (release.published || []).length);
  $('#releaseFormat') && ($('#releaseFormat').value = release.format || 'Single');
  $('#releasePlatform') && ($('#releasePlatform').value = release.platform || 'Global Stream');
  $('#releaseMarketingInput') && ($('#releaseMarketingInput').value = release.marketing || 55000);
  $('#releaseVideoInput') && ($('#releaseVideoInput').value = release.video || 35);
  $('#releasePrInput') && ($('#releasePrInput').value = release.pr || 45);
  $('#releaseCost') && ($('#releaseCost').textContent = '$ ' + Number(scores.cost).toLocaleString('pt-BR'));
  updateMetric('#metricReleaseHype', scores.hype);
  updateMetric('#metricReleaseStreams', scores.streams);
  updateMetric('#metricReleaseCritics', scores.critics);
  updateMetric('#metricReleaseChart', scores.chart);
  const masterList = $('#releaseMasterList');
  if (masterList) {
    masterList.innerHTML = '';
    releaseMasterCandidates(save).forEach((master, index) => {
      const btn = document.createElement('button');
      btn.className = 'release-master' + (index === release.activeMasterIndex ? ' selected' : '');
      btn.dataset.releaseMasterIndex = index;
      btn.innerHTML = `<strong>${master.title}${master.provisional ? '<span class="release-badge">PROVISÓRIA</span>' : ''}</strong><span>${master.genre || 'Rock'} • Q${master.finalQuality || master.quality || 0} • Rádio ${master.radio || master.hit || 0}</span>`;
      masterList.appendChild(btn);
    });
  }
  const chart = $('#releaseChartList');
  if (chart) {
    const predictedPos = Math.max(1, 101 - scores.chart);
    chart.innerHTML = `<div class="song-row chart-position"><span>Previsão Global</span><b>#${predictedPos}</b></div><div class="song-row chart-position"><span>Streams projetados</span><b>${Number(scores.projectedStreams).toLocaleString('pt-BR')}</b></div><div class="song-row chart-position"><span>Receita estimada</span><b>$ ${Number(scores.projectedRevenue).toLocaleString('pt-BR')}</b></div>`;
  }
  const feed = $('#releaseReviewFeed');
  if (feed) {
    const label = scores.critics > 80 ? 'crítica internacional está impressionada' : scores.hype > 75 ? 'fãs estão movimentando a prévia' : 'campanha ainda precisa de força';
    feed.innerHTML = `<div class="song-row"><strong>Music Press</strong><span>A qualidade ${scores.master.title} sugere que a ${label}.</span></div><div class="song-row"><strong>Social Buzz</strong><span>Hype ${scores.hype}/100 • potencial de descoberta ${scores.streams}/100.</span></div>`;
  }
  const history = $('#releaseHistoryList');
  if (history) {
    history.innerHTML = '';
    (release.published || []).slice(-6).reverse().forEach(item => {
      const row = document.createElement('div');
      row.className = 'song-row';
      row.innerHTML = `<strong>${item.title}</strong><span>${item.format} • #${item.chartPosition} • ${Number(item.streams).toLocaleString('pt-BR')} streams • $ ${Number(item.revenue).toLocaleString('pt-BR')}</span>`;
      history.appendChild(row);
    });
    if (!release.published?.length) history.innerHTML = '<p class="muted">Nenhum lançamento publicado ainda. Publique uma master para abrir charts e reviews.</p>';
  }
}

function persistReleaseControls() {
  const save = ensureSave();
  save.release = save.release || createReleaseState();
  save.release.format = $('#releaseFormat')?.value || save.release.format || 'Single';
  save.release.platform = $('#releasePlatform')?.value || save.release.platform || 'Global Stream';
  save.release.marketing = clamp($('#releaseMarketingInput')?.value || save.release.marketing, 5000, 300000);
  save.release.video = clamp($('#releaseVideoInput')?.value || save.release.video, 0, 100);
  save.release.pr = clamp($('#releasePrInput')?.value || save.release.pr, 0, 100);
  save.release.window = $('#releaseWindow')?.value || save.release.window || 'normal';
  save.release.pricing = $('#releasePricing')?.value || save.release.pricing || 'standard';
  saveGame(save);
  renderRelease();
}

function selectReleaseMaster(index) {
  const save = ensureSave();
  save.release = save.release || createReleaseState();
  save.release.activeMasterIndex = clamp(index, 0, Math.max(0, releaseMasterCandidates(save).length - 1));
  saveGame(save);
  renderRelease();
}

function autoTuneRelease() {
  const save = ensureSave();
  save.release = save.release || createReleaseState();
  const cash = save.band.cash || 0;
  save.release.format = 'Single';
  save.release.platform = cash > 600000 ? 'Global Stream' : cash > 150000 ? 'RockWave' : 'Indie Radar';
  save.release.marketing = cash > 600000 ? 180000 : cash > 150000 ? 85000 : 25000;
  save.release.video = cash > 600000 ? 80 : cash > 150000 ? 55 : 25;
  save.release.pr = cash > 600000 ? 78 : cash > 150000 ? 54 : 28;
  save.release.window = cash > 400000 ? 'festival' : 'quiet';
  save.release.pricing = cash > 500000 ? 'premium' : 'viral';
  saveGame(save);
  renderRelease();
}

function publishRelease() {
  const save = ensureSave();
  save.release = save.release || createReleaseState();
  const scores = releaseScores(save);
  if ((save.band.cash || 0) < scores.cost) {
    reportIssue('RELEASE_CASH_GUARD', new Error('Caixa insuficiente para campanha'), { cost: scores.cost });
    $('#releaseNarrative') && ($('#releaseNarrative').textContent = 'Caixa insuficiente para publicar com esta campanha. Reduza marketing ou faça shows primeiro.');
    return;
  }
  const item = {
    title: scores.master.title,
    genre: scores.master.genre || 'Rock',
    format: scores.release.format,
    platform: scores.release.platform,
    window: scores.release.window || 'normal',
    pricing: scores.release.pricing || 'standard',
    hype: scores.hype,
    streamsScore: scores.streams,
    critics: scores.critics,
    chart: scores.chart,
    chartPosition: Math.max(1, 101 - scores.chart),
    streams: scores.projectedStreams,
    revenue: scores.projectedRevenue,
    cost: scores.cost,
    publishedAt: new Date().toISOString()
  };
  save.band.cash = Math.max(0, (save.band.cash || 0) - scores.cost + scores.projectedRevenue);
  save.band.fans = Math.round((save.band.fans || 0) + scores.projectedStreams * 0.045 + scores.hype * 55);
  save.band.xp = Math.round((save.band.xp || 0) + scores.chart * 22 + scores.critics * 14);
  if (scores.chart > 82) save.band.reputation = 'Internacional';
  else if (scores.chart > 65) save.band.reputation = 'Nacional';
  save.release.published = Array.isArray(save.release.published) ? save.release.published : [];
  save.release.published.push(item);
  save.release.reviews = Array.isArray(save.release.reviews) ? save.release.reviews : [];
  save.release.reviews.push({ title:item.title, text:`${item.platform} colocou ${item.title} na posição #${item.chartPosition}.`, at:item.publishedAt });
  saveGame(save);
  $('#releaseNarrative') && ($('#releaseNarrative').textContent = `${item.title} publicado: #${item.chartPosition}, ${Number(item.streams).toLocaleString('pt-BR')} streams projetados e receita $ ${Number(item.revenue).toLocaleString('pt-BR')}.`);
  renderRelease();
}



function createLiveShowState() {
  return {
    venue: 'Underground Club',
    city: 'São Paulo',
    showType: 'Headliner',
    ticketPrice: 32,
    production: 45,
    setlist: [],
    showStarted: false,
    showMinute: 0,
    crowd: 42,
    performance: 48,
    energy: 60,
    merch: 18,
    heat: 22,
    technicalRisk: 18,
    encoreAvailable: false,
    incidentsResolved: 0,
    history: [],
    feed: []
  };
}

function liveSongCandidates(save) {
  const published = save?.release?.published || [];
  if (published.length) return published.map((r, i) => ({ id:'pub_'+i, title:r.title, genre:r.genre || 'Rock', power: clamp((r.chart||50)*.45 + (r.hype||50)*.25 + (r.critics||50)*.15 + 20), source:'Lançamento' }));
  const masters = save?.studio?.releasedMasters || [];
  if (masters.length) return masters.map((m, i) => ({ id:'master_'+i, title:m.title, genre:m.genre || 'Rock', power: clamp((m.finalQuality||50)*.45 + (m.radio||45)*.25 + (m.authenticity||50)*.18), source:'Master' }));
  const demos = save?.composition?.library || [];
  if (demos.length) return demos.map((s, i) => ({ id:'demo_'+i, title:s.title, genre:s.genre || 'Rock', power: clamp((s.quality||50)*.40 + (s.hit||45)*.25 + (s.emotion||50)*.20), source:'Demo' }));
  return [{ id:'default_0', title:'Last Stage Lights', genre:'Rock Alternativo', power:62, source:'Provisória' },{ id:'default_1', title:'Backstage Saints', genre:'Hard Rock', power:56, source:'Provisória' },{ id:'default_2', title:'Golden Riot', genre:'Alternative', power:59, source:'Provisória' }];
}

function venueModifier(venue) {
  const map = {
    'Underground Club': { capacity: 420, prestige: 18, cost: 8000, crowd: 14, risk: 18 },
    'Theater Hall': { capacity: 1800, prestige: 34, cost: 22000, crowd: 9, risk: 14 },
    'Festival Stage': { capacity: 16000, prestige: 62, cost: 85000, crowd: 20, risk: 26 },
    'Arena Gold': { capacity: 52000, prestige: 88, cost: 260000, crowd: 26, risk: 32 }
  };
  return map[venue] || map['Underground Club'];
}


function cityModifier(city) {
  const map = {
    'São Paulo': { fans: 1.08, press: 10, risk: 12, scene:'capital rock nacional' },
    'Rio de Janeiro': { fans: 1.02, press: 13, risk: 16, scene:'cidade de mídia e festival' },
    'Buenos Aires': { fans: 1.10, press: 14, risk: 18, scene:'público latino intenso' },
    'Lisboa': { fans: 1.04, press: 16, risk: 14, scene:'porta de entrada europeia' },
    'New York': { fans: 1.18, press: 24, risk: 26, scene:'mercado internacional crítico' },
    'Tokyo': { fans: 1.22, press: 28, risk: 30, scene:'arena global premium' }
  };
  return map[city] || map['São Paulo'];
}

function showTypeModifier(type) {
  const map = {
    'Opening Act': { demand:-5, cost:.72, prestige:8, energy:8, label:'abertura' },
    'Headliner': { demand:8, cost:1.00, prestige:18, energy:0, label:'show principal' },
    'Festival Slot': { demand:18, cost:1.20, prestige:28, energy:-6, label:'festival' },
    'Arena Special': { demand:25, cost:1.48, prestige:42, energy:-12, label:'especial de arena' }
  };
  return map[type] || map['Headliner'];
}

function pushLiveFeed(live, title, text) {
  live.feed = [{ title, text, at:new Date().toISOString() }, ...(live.feed || [])].slice(0, 12);
}

function liveShowScores(save) {
  const live = save.liveShow || createLiveShowState();
  const songs = liveSongCandidates(save);
  const selectedIds = Array.isArray(live.setlist) && live.setlist.length ? live.setlist : songs.slice(0,3).map(s => s.id);
  const set = songs.filter(s => selectedIds.includes(s.id));
  const setPower = Math.round(set.reduce((a,s)=>a+s.power,0) / Math.max(1,set.length));
  const band = bandStats(save);
  const staff = staffImpact(save.staff || []);
  const venue = venueModifier(live.venue);
  const city = cityModifier(live.city || 'São Paulo');
  const showType = showTypeModifier(live.showType || 'Headliner');
  const production = clamp(live.production || 0);
  const ticket = clamp(live.ticketPrice || 0, 5, 300);
  const demand = clamp(Math.round((save.band.fans || 0) / Math.max(700, venue.capacity) * 18 + setPower*.28 + band.energy*.18 + band.synergy*.14 + staff.marketing*.12 + venue.crowd + city.press*.12 + showType.demand));
  const attendance = Math.min(venue.capacity, Math.max(80, Math.round(venue.capacity * city.fans * clamp(demand, 18, 100) / 100)));
  const performanceBase = clamp(Math.round(setPower*.32 + band.overall*.28 + band.energy*.18 + production*.12 + staff.logistics*.06 + staff.morale*.04 + showType.energy));
  const crowdBase = clamp(Math.round(demand*.35 + performanceBase*.30 + venue.prestige*.18 + production*.10 + showType.prestige*.08));
  const technicalRisk = clamp(Math.round(venue.risk + city.risk*.42 + showType.prestige*.12 - production*.18 - staff.logistics*.16));
  const revenue = Math.round(attendance * ticket + attendance * (8 + (live.merch || 18) * .55));
  const cost = Math.round((venue.cost + production * 900 + set.length * 1500) * showType.cost);
  const profit = revenue - cost;
  return { live, songs, selectedIds, set, setPower, band, staff, venue, city, showType, demand, attendance, performanceBase, crowdBase, technicalRisk, revenue, cost, profit };
}

function renderLiveShow() {
  const save = ensureSave();
  save.liveShow = save.liveShow || createLiveShowState();
  const scores = liveShowScores(save);
  const live = save.liveShow;
  $('#liveVenue') && ($('#liveVenue').value = live.venue || 'Underground Club');
  $('#liveCity') && ($('#liveCity').value = live.city || 'São Paulo');
  $('#liveShowType') && ($('#liveShowType').value = live.showType || 'Headliner');
  $('#liveTicketInput') && ($('#liveTicketInput').value = live.ticketPrice || 32);
  $('#liveProductionInput') && ($('#liveProductionInput').value = live.production || 45);
  $('#liveMerchInput') && ($('#liveMerchInput').value = live.merch || 18);
  $('#liveAttendance') && ($('#liveAttendance').textContent = Number(scores.attendance).toLocaleString('pt-BR'));
  $('#liveRevenue') && ($('#liveRevenue').textContent = '$ ' + Number(scores.revenue).toLocaleString('pt-BR'));
  $('#liveCost') && ($('#liveCost').textContent = '$ ' + Number(scores.cost).toLocaleString('pt-BR'));
  $('#liveProfit') && ($('#liveProfit').textContent = '$ ' + Number(scores.profit).toLocaleString('pt-BR'));
  $('#liveRisk') && ($('#liveRisk').textContent = scores.technicalRisk + '%');
  $('#liveCityScene') && ($('#liveCityScene').textContent = scores.city.scene + ' • ' + scores.showType.label);
  updateMetric('#metricLiveCrowd', live.showStarted ? live.crowd : scores.crowdBase);
  updateMetric('#metricLivePerformance', live.showStarted ? live.performance : scores.performanceBase);
  updateMetric('#metricLiveEnergy', live.energy || 60);
  updateMetric('#metricLiveHeat', live.heat || 22);
  $('#liveNarrative') && ($('#liveNarrative').textContent = live.showStarted ? `Show em andamento: minuto ${live.showMinute}. Controle energia, solos, falhas técnicas e encore.` : `Monte setlist, cidade, tipo de show e produção. Risco técnico ${scores.technicalRisk}% e cena: ${scores.city.scene}.`);
  const list = $('#liveSetlistList');
  if (list) {
    list.innerHTML = '';
    scores.songs.forEach((song, index) => {
      const btn = document.createElement('button');
      btn.className = 'live-song' + (scores.selectedIds.includes(song.id) ? ' selected' : '');
      btn.dataset.liveSongIndex = index;
      btn.innerHTML = `<strong>${song.title}</strong><span>${song.genre} • ${song.source} • Força ${song.power}</span>`;
      list.appendChild(btn);
    });
  }
  const feed = $('#liveFeed');
  if (feed) {
    feed.innerHTML = '';
    const items = (live.feed || []).slice(-7).reverse();
    items.forEach(item => { const row = document.createElement('div'); row.className='song-row'; row.innerHTML = `<strong>${item.title}</strong><span>${item.text}</span>`; feed.appendChild(row); });
    if (!items.length) feed.innerHTML = '<p class="muted">Nenhum show iniciado ainda. Prepare a setlist e toque ao vivo.</p>';
  }
  const history = $('#liveHistory');
  if (history) {
    history.innerHTML = '';
    (live.history || []).slice(-5).reverse().forEach(show => { const row=document.createElement('div'); row.className='song-row'; row.innerHTML = `<strong>${show.city || 'Tour'} • ${show.venue} • ${show.grade}</strong><span>Público ${Number(show.attendance).toLocaleString('pt-BR')} • Lucro $ ${Number(show.profit).toLocaleString('pt-BR')} • Fãs +${Number(show.fans).toLocaleString('pt-BR')}</span>`; history.appendChild(row); });
    if (!live.history?.length) history.innerHTML = '<p class="muted">Histórico vazio. O primeiro show vai registrar resultado, lucro e crescimento de fãs.</p>';
  }
}

function persistLiveControls() {
  const save = ensureSave();
  save.liveShow = save.liveShow || createLiveShowState();
  save.liveShow.venue = $('#liveVenue')?.value || save.liveShow.venue;
  save.liveShow.city = $('#liveCity')?.value || save.liveShow.city || 'São Paulo';
  save.liveShow.showType = $('#liveShowType')?.value || save.liveShow.showType || 'Headliner';
  save.liveShow.ticketPrice = clamp($('#liveTicketInput')?.value || save.liveShow.ticketPrice, 5, 300);
  save.liveShow.production = clamp($('#liveProductionInput')?.value || save.liveShow.production, 0, 100);
  save.liveShow.merch = clamp($('#liveMerchInput')?.value || save.liveShow.merch || 18, 0, 80);
  saveGame(save);
  renderLiveShow();
}

function toggleSetlistSong(index) {
  const save = ensureSave();
  save.liveShow = save.liveShow || createLiveShowState();
  const songs = liveSongCandidates(save);
  const song = songs[index];
  if (!song) return;
  const set = Array.isArray(save.liveShow.setlist) ? save.liveShow.setlist : [];
  save.liveShow.setlist = set.includes(song.id) ? set.filter(id => id !== song.id) : [...set, song.id].slice(0, 8);
  saveGame(save);
  renderLiveShow();
}

function autoTuneShow() {
  const save = ensureSave();
  save.liveShow = save.liveShow || createLiveShowState();
  const fans = save.band.fans || 0;
  save.liveShow.venue = fans > 850000 ? 'Arena Gold' : fans > 110000 ? 'Festival Stage' : fans > 24000 ? 'Theater Hall' : 'Underground Club';
  save.liveShow.city = fans > 600000 ? 'New York' : fans > 220000 ? 'Lisboa' : fans > 70000 ? 'Buenos Aires' : 'São Paulo';
  save.liveShow.showType = fans > 850000 ? 'Arena Special' : fans > 110000 ? 'Festival Slot' : fans > 24000 ? 'Headliner' : 'Opening Act';
  save.liveShow.ticketPrice = fans > 110000 ? 78 : fans > 24000 ? 48 : 28;
  save.liveShow.production = fans > 110000 ? 82 : fans > 24000 ? 62 : 38;
  save.liveShow.merch = fans > 110000 ? 36 : fans > 24000 ? 24 : 14;
  save.liveShow.setlist = liveSongCandidates(save).slice(0,5).map(s=>s.id);
  saveGame(save);
  renderLiveShow();
}

function startLiveShow() {
  const save = ensureSave();
  save.liveShow = save.liveShow || createLiveShowState();
  const scores = liveShowScores(save);
  if ((save.band.cash || 0) < scores.cost) {
    reportIssue('LIVE_SHOW_CASH_GUARD', new Error('Caixa insuficiente para iniciar show'), { cost:scores.cost });
    $('#liveNarrative') && ($('#liveNarrative').textContent = 'Caixa insuficiente para bancar esta produção. Reduza venue/produção ou lance músicas antes.');
    return;
  }
  save.band.cash = Math.max(0, (save.band.cash || 0) - scores.cost);
  save.liveShow.showStarted = true;
  save.liveShow.showMinute = 10;
  save.liveShow.crowd = scores.crowdBase;
  save.liveShow.performance = scores.performanceBase;
  save.liveShow.energy = clamp(scores.band.energy + scores.setPower*.12);
  save.liveShow.heat = clamp(scores.venue.prestige*.22 + scores.production*.16 + scores.demand*.26);
  save.liveShow.technicalRisk = scores.technicalRisk;
  save.liveShow.encoreAvailable = scores.crowdBase > 58 || scores.performanceBase > 64;
  save.liveShow.incidentsResolved = 0;
  save.liveShow.feed = [];
  pushLiveFeed(save.liveShow, 'Abertura do show', `${scores.live.city || 'São Paulo'} • ${scores.venue.capacity.toLocaleString('pt-BR')} de capacidade, público estimado ${scores.attendance.toLocaleString('pt-BR')}.`);
  if (scores.technicalRisk > 45) pushLiveFeed(save.liveShow, 'Alerta técnico', 'Produção detectou risco de falha em luz, PA ou troca de instrumentos. Use Corrigir falha se necessário.');
  saveGame(save);
  renderLiveShow();
}

function liveBoostCrowd() {
  const save = ensureSave();
  if (!save.liveShow?.showStarted) return startLiveShow();
  save.liveShow.crowd = clamp(save.liveShow.crowd + 9);
  save.liveShow.performance = clamp(save.liveShow.performance + 3);
  save.liveShow.energy = clamp(save.liveShow.energy - 5);
  save.liveShow.heat = clamp(save.liveShow.heat + 7);
  save.liveShow.showMinute = clamp(save.liveShow.showMinute + 12, 0, 95);
  pushLiveFeed(save.liveShow, 'Interação com o público', 'A plateia respondeu aos gritos e celulares acenderam a arena.');
  saveGame(save); renderLiveShow();
}

function liveSoloMoment() {
  const save = ensureSave();
  if (!save.liveShow?.showStarted) return startLiveShow();
  const stats = bandStats(save);
  const success = clamp(Math.round(stats.creativity*.35 + stats.energy*.25 + Math.random()*45));
  save.liveShow.performance = clamp(save.liveShow.performance + (success > 60 ? 10 : -5));
  save.liveShow.crowd = clamp(save.liveShow.crowd + (success > 60 ? 8 : -3));
  save.liveShow.energy = clamp(save.liveShow.energy - 9);
  save.liveShow.heat = clamp(save.liveShow.heat + (success > 60 ? 12 : 2));
  save.liveShow.showMinute = clamp(save.liveShow.showMinute + 15, 0, 95);
  pushLiveFeed(save.liveShow, 'Solo / improviso', success > 60 ? 'Solo incendiou o público e elevou a performance.' : 'Improviso arriscado perdeu precisão, mas o show continuou seguro.');
  saveGame(save); renderLiveShow();
}


function liveFixTechnicalIssue() {
  const save = ensureSave();
  if (!save.liveShow?.showStarted) return startLiveShow();
  save.liveShow.technicalRisk = clamp((save.liveShow.technicalRisk || 18) - 16);
  save.liveShow.performance = clamp(save.liveShow.performance + 4);
  save.liveShow.energy = clamp(save.liveShow.energy - 3);
  save.liveShow.incidentsResolved = (save.liveShow.incidentsResolved || 0) + 1;
  save.liveShow.showMinute = clamp(save.liveShow.showMinute + 8, 0, 95);
  pushLiveFeed(save.liveShow, 'Falha técnica controlada', 'Equipe ajustou retorno, luz e troca de instrumentos antes do público perceber.');
  saveGame(save); renderLiveShow();
}

function liveCrowdChant() {
  const save = ensureSave();
  if (!save.liveShow?.showStarted) return startLiveShow();
  const synergy = bandStats(save).synergy;
  save.liveShow.crowd = clamp(save.liveShow.crowd + 11);
  save.liveShow.heat = clamp(save.liveShow.heat + 9 + synergy*.04);
  save.liveShow.energy = clamp(save.liveShow.energy - 4);
  save.liveShow.encoreAvailable = true;
  save.liveShow.showMinute = clamp(save.liveShow.showMinute + 10, 0, 95);
  pushLiveFeed(save.liveShow, 'Crowd chant', 'A plateia cantou o refrão sozinha. Vídeos começam a viralizar nas redes.');
  saveGame(save); renderLiveShow();
}

function liveEncoreMoment() {
  const save = ensureSave();
  if (!save.liveShow?.showStarted) return startLiveShow();
  if (!save.liveShow.encoreAvailable) {
    pushLiveFeed(save.liveShow, 'Encore ainda bloqueado', 'O público precisa de mais energia ou interação antes do bis.');
    saveGame(save); renderLiveShow(); return;
  }
  save.liveShow.performance = clamp(save.liveShow.performance + 7);
  save.liveShow.crowd = clamp(save.liveShow.crowd + 13);
  save.liveShow.heat = clamp(save.liveShow.heat + 15);
  save.liveShow.energy = clamp(save.liveShow.energy - 12);
  save.liveShow.encoreAvailable = false;
  save.liveShow.showMinute = clamp(save.liveShow.showMinute + 14, 0, 110);
  pushLiveFeed(save.liveShow, 'Encore liberado', 'Bis explosivo fechou a noite com sensação de show histórico.');
  saveGame(save); renderLiveShow();
}

function finishLiveShow() {
  const save = ensureSave();
  save.liveShow = save.liveShow || createLiveShowState();
  const scores = liveShowScores(save);
  const crowd = save.liveShow.showStarted ? save.liveShow.crowd : scores.crowdBase;
  const perf = save.liveShow.showStarted ? save.liveShow.performance : scores.performanceBase;
  const riskPenalty = Math.max(0, (save.liveShow.technicalRisk || scores.technicalRisk || 0) - 42) * .18;
  const fixBonus = (save.liveShow.incidentsResolved || 0) * 2.5;
  const gradeScore = clamp(Math.round(crowd*.32 + perf*.34 + (save.liveShow.energy||60)*.13 + (save.liveShow.heat||22)*.21 - riskPenalty + fixBonus));
  const grade = gradeScore >= 88 ? 'Lendário' : gradeScore >= 74 ? 'Excelente' : gradeScore >= 58 ? 'Bom' : 'Irregular';
  const fansGain = Math.round(scores.attendance * (0.08 + gradeScore/700));
  const xpGain = Math.round(gradeScore * 32 + scores.setPower * 8);
  const profit = scores.revenue;
  save.band.cash = Math.max(0, (save.band.cash || 0) + profit);
  save.band.fans = Math.round((save.band.fans || 0) + fansGain);
  save.band.xp = Math.round((save.band.xp || 0) + xpGain);
  if (gradeScore > 84 && scores.venue.prestige > 60) save.band.reputation = 'Internacional';
  else if (gradeScore > 68) save.band.reputation = 'Nacional';
  const item = { venue: save.liveShow.venue, city: save.liveShow.city || 'São Paulo', showType: save.liveShow.showType || 'Headliner', grade, gradeScore, attendance:scores.attendance, revenue:scores.revenue, cost:scores.cost, profit:scores.profit, fans:fansGain, xp:xpGain, technicalRisk: save.liveShow.technicalRisk || scores.technicalRisk, at:new Date().toISOString() };
  save.liveShow.history = Array.isArray(save.liveShow.history) ? save.liveShow.history : [];
  save.liveShow.history.push(item);
  pushLiveFeed(save.liveShow, 'Show encerrado', `Resultado ${grade}. Fãs +${fansGain.toLocaleString('pt-BR')}, XP +${xpGain.toLocaleString('pt-BR')}.`);
  save.liveShow.showStarted = false;
  save.liveShow.showMinute = 0;
  saveGame(save);
  renderLiveShow();
}

function createSocialState() {
  return {
    action: 'Post de bastidor',
    tone: 'Autêntico',
    budget: 18000,
    hype: 38,
    viral: 24,
    loyalty: 55,
    risk: 12,
    reach: 0,
    fanFeed: [],
    trendFeed: [
      { title:'Tendência: rock cinematográfico', text:'O público está respondendo bem a bandas com visual dark premium e shows imersivos.' },
      { title:'Mercado local aquecido', text:'Casas médias buscam artistas com presença forte em vídeo curto e bastidores.' }
    ],
    history: []
  };
}

function socialActionModifier(action, tone) {
  const actionMap = {
    'Post de bastidor': { hype:18, viral:16, loyalty:24, risk:6, cost:1 },
    'Teaser de música': { hype:28, viral:24, loyalty:16, risk:8, cost:1.2 },
    'Entrevista polêmica': { hype:36, viral:34, loyalty:6, risk:32, cost:0.8 },
    'Clipe curto vertical': { hype:30, viral:42, loyalty:12, risk:12, cost:1.4 },
    'Live com fãs': { hype:20, viral:18, loyalty:38, risk:7, cost:1 },
    'Anúncio de show': { hype:24, viral:18, loyalty:20, risk:9, cost:1.1 }
  };
  const toneMap = {
    'Autêntico': { hype:4, viral:2, loyalty:12, risk:-4 },
    'Rebelde': { hype:12, viral:10, loyalty:0, risk:12 },
    'Emocional': { hype:5, viral:6, loyalty:14, risk:-2 },
    'Premium': { hype:10, viral:4, loyalty:5, risk:2 },
    'Viral': { hype:8, viral:18, loyalty:-2, risk:10 }
  };
  return { ...(actionMap[action] || actionMap['Post de bastidor']), tone: toneMap[tone] || toneMap['Autêntico'] };
}

function socialScores(save) {
  const social = save.social || createSocialState();
  const band = bandStats(save);
  const staff = staffImpact(save.staff || []);
  const liveHeat = save.liveShow?.heat || 20;
  const lastRelease = (save.release?.published || []).slice(-1)[0] || null;
  const releaseHype = lastRelease ? clamp((lastRelease.hype || 40) * .45 + (lastRelease.chart || 40) * .25) : 22;
  const mod = socialActionModifier(social.action, social.tone);
  const budget = clamp(social.budget, 0, 150000);
  const budgetPower = clamp(Math.round(Math.sqrt(budget) / 4.2));
  const hype = clamp(Math.round(mod.hype + mod.tone.hype + budgetPower + staff.marketing*.22 + band.creativity*.10 + releaseHype*.18 + liveHeat*.08));
  const viral = clamp(Math.round(mod.viral + mod.tone.viral + budgetPower*.85 + staff.marketing*.16 + band.stagePresence*.12 + releaseHype*.16));
  const loyalty = clamp(Math.round(mod.loyalty + mod.tone.loyalty + band.morale*.18 + band.synergy*.16 + staff.morale*.10 + (save.band.fans||0)/120000));
  const risk = clamp(Math.round(mod.risk + mod.tone.risk + Math.max(0, viral-70)*.18 - staff.marketing*.08 - loyalty*.05));
  const reach = Math.round((save.band.fans || 1000) * (0.6 + hype/55 + viral/70) + budget * 1.9);
  const cost = Math.round(budget * mod.cost + 2500);
  return { social, band, staff, hype, viral, loyalty, risk, reach, cost };
}

function renderSocial() {
  const save = ensureSave();
  save.social = save.social || createSocialState();
  const scores = socialScores(save);
  const social = save.social;
  $('#socialAction') && ($('#socialAction').value = social.action || 'Post de bastidor');
  $('#socialTone') && ($('#socialTone').value = social.tone || 'Autêntico');
  $('#socialBudgetInput') && ($('#socialBudgetInput').value = social.budget || 18000);
  $('#socialReach') && ($('#socialReach').textContent = Number(scores.reach).toLocaleString('pt-BR'));
  $('#socialCost') && ($('#socialCost').textContent = '$ ' + Number(scores.cost).toLocaleString('pt-BR'));
  updateMetric('#metricSocialHype', scores.hype);
  updateMetric('#metricSocialViral', scores.viral);
  updateMetric('#metricSocialLoyalty', scores.loyalty);
  updateMetric('#metricSocialRisk', scores.risk);
  $('#socialNarrative') && ($('#socialNarrative').textContent = scores.risk > 55 ? 'A campanha pode viralizar, mas há risco real de backlash. Ajuste tom, staff ou investimento.' : scores.viral > 70 ? 'A IA prevê alta chance de viralização. Boa janela para lançar clipe, show ou single.' : 'Campanha segura para fortalecer fãs e preparar o próximo passo da carreira.');
  const fan = $('#socialFanFeed');
  if (fan) {
    fan.innerHTML = '';
    const items = (social.fanFeed || []).slice(-8).reverse();
    items.forEach(item => { const row=document.createElement('div'); row.className='song-row'; row.innerHTML = `<strong>${item.title}</strong><span>${item.text}</span>`; fan.appendChild(row); });
    if (!items.length) fan.innerHTML = '<p class="muted">Sem comentários recentes. Publique uma ação social para gerar reação do público.</p>';
  }
  const trends = $('#socialTrendFeed');
  if (trends) {
    trends.innerHTML = '';
    (social.trendFeed || []).slice(-6).reverse().forEach(item => { const row=document.createElement('div'); row.className='song-row'; row.innerHTML = `<strong>${item.title}</strong><span>${item.text}</span>`; trends.appendChild(row); });
  }
  const hist = $('#socialHistoryList');
  if (hist) {
    hist.innerHTML = '';
    (social.history || []).slice(-6).reverse().forEach(item => { const row=document.createElement('div'); row.className='song-row'; row.innerHTML = `<strong>${item.action} • ${item.grade}</strong><span>Alcance ${Number(item.reach).toLocaleString('pt-BR')} • Fãs +${Number(item.fans).toLocaleString('pt-BR')} • Hype ${item.hype} • Risco ${item.risk}</span>`; hist.appendChild(row); });
    if (!social.history?.length) hist.innerHTML = '<p class="muted">Histórico vazio. As campanhas sociais vão registrar crescimento e risco.</p>';
  }
}

function persistSocialControls() {
  const save = ensureSave();
  save.social = save.social || createSocialState();
  save.social.action = $('#socialAction')?.value || save.social.action;
  save.social.tone = $('#socialTone')?.value || save.social.tone;
  save.social.budget = clamp($('#socialBudgetInput')?.value || save.social.budget, 0, 150000);
  saveGame(save);
  renderSocial();
    renderEconomy();
}

function autoTuneSocial() {
  const save = ensureSave();
  save.social = save.social || createSocialState();
  const fans = save.band?.fans || 0;
  const hasRelease = (save.release?.published || []).length > 0;
  save.social.action = hasRelease ? 'Clipe curto vertical' : fans > 40000 ? 'Live com fãs' : 'Post de bastidor';
  save.social.tone = hasRelease ? 'Viral' : 'Autêntico';
  save.social.budget = fans > 100000 ? 65000 : fans > 25000 ? 30000 : 12000;
  saveGame(save); renderSocial();
}

function runSocialAction() {
  const save = ensureSave();
  save.social = save.social || createSocialState();
  persistSocialControls();
  const scores = socialScores(save);
  if ((save.band.cash || 0) < scores.cost) {
    $('#socialNarrative') && ($('#socialNarrative').textContent = 'Caixa insuficiente para essa campanha. Reduza o impulsionamento.');
    reportIssue('SOCIAL_CASH_GUARD', new Error('Caixa insuficiente para campanha social'), { cost:scores.cost });
    return;
  }
  const volatility = Math.round(Math.random()*16 - 6);
  const finalViral = clamp(scores.viral + volatility);
  const finalHype = clamp(scores.hype + Math.round(volatility/2));
  const finalRisk = clamp(scores.risk + Math.max(0, volatility-5));
  const gradeScore = clamp(Math.round(finalHype*.35 + finalViral*.34 + scores.loyalty*.22 - finalRisk*.12));
  const grade = gradeScore >= 82 ? 'Viral internacional' : gradeScore >= 68 ? 'Muito forte' : gradeScore >= 52 ? 'Positivo' : finalRisk > 55 ? 'Backlash' : 'Morno';
  const fansGain = Math.max(0, Math.round(scores.reach * (0.006 + gradeScore/18000 - finalRisk/50000)));
  const xpGain = Math.round(gradeScore * 20 + finalViral * 8);
  save.band.cash = Math.max(0, (save.band.cash || 0) - scores.cost);
  save.band.fans = Math.round((save.band.fans || 0) + fansGain);
  save.band.xp = Math.round((save.band.xp || 0) + xpGain);
  if (gradeScore > 82 && (save.band.fans || 0) > 100000) save.band.reputation = 'Internacional';
  else if (gradeScore > 66) save.band.reputation = 'Nacional';
  const comments = [
    ['Fã antigo', 'Finalmente uma banda com identidade de verdade.'],
    ['Crítico indie', 'A estética dark premium está chamando atenção no circuito.'],
    ['Novo seguidor', 'Vi o vídeo no feed e precisei procurar a banda.'],
    ['Produtor de festival', 'Boa presença digital. Pode virar convite para palco maior.'],
    ['Comentário dividido', finalRisk > 50 ? 'A campanha foi intensa e parte do público reagiu mal.' : 'A ação pareceu natural e fortaleceu a comunidade.']
  ];
  const picked = comments.sort(()=>Math.random()-.5).slice(0,3).map(([title,text])=>({title,text,at:new Date().toISOString()}));
  save.social.fanFeed = [...(save.social.fanFeed || []), ...picked].slice(-20);
  save.social.trendFeed = [...(save.social.trendFeed || []), { title: grade, text:`${save.social.action} com tom ${save.social.tone}: alcance ${scores.reach.toLocaleString('pt-BR')} e fãs +${fansGain.toLocaleString('pt-BR')}.` }].slice(-12);
  save.social.history = Array.isArray(save.social.history) ? save.social.history : [];
  save.social.history.push({ action: save.social.action, tone: save.social.tone, grade, reach:scores.reach, hype:finalHype, viral:finalViral, loyalty:scores.loyalty, risk:finalRisk, fans:fansGain, xp:xpGain, cost:scores.cost, at:new Date().toISOString() });
  save.social.hype = finalHype; save.social.viral = finalViral; save.social.loyalty = scores.loyalty; save.social.risk = finalRisk; save.social.reach = scores.reach;
  saveGame(save);
  renderSocial(); syncProfileToUI(save);
}


function createEventState() {
  return {
    activeChoice: 'balanced', tone: 'professional', heat: 22, crisisControl: 55, history: [],
    current: { id:'first_interview', type:'Entrevista', title:'Entrevista no camarim', description:'Um jornalista pergunta se a banda está preparada para uma turnê maior depois do crescimento recente.', impact:42, risk:18, reward:28000 },
    pool: [
      { id:'ego_conflict', type:'Conflito interno', title:'Discussão entre integrantes', description:'O guitarrista quer mais destaque nos solos e ameaça expor a tensão nas redes.', impact:58, risk:46, reward:18000 },
      { id:'award_invite', type:'Premiação', title:'Convite para prêmio independente', description:'A banda foi indicada em uma categoria internacional e precisa decidir como se posicionar.', impact:64, risk:24, reward:85000 },
      { id:'press_attack', type:'Crise de imprensa', title:'Crítica viral negativa', description:'Um portal acusa a banda de soar comercial demais após o último lançamento.', impact:72, risk:61, reward:42000 },
      { id:'fan_campaign', type:'Fandom', title:'Campanha espontânea de fãs', description:'Fãs começaram uma campanha para colocar a banda em um festival grande.', impact:55, risk:20, reward:56000 },
      { id:'sponsor_pressure', type:'Patrocinador', title:'Pressão do patrocinador', description:'Um patrocinador quer influenciar figurino e setlist para aumentar exposição de marca.', impact:66, risk:52, reward:125000 },
      { id:'backstage_accident', type:'Backstage', title:'Acidente técnico no palco', description:'Um equipamento falha durante a passagem de som e a equipe precisa agir rápido.', impact:48, risk:38, reward:25000 }
    ],
    choices: [
      { id:'balanced', name:'Resposta equilibrada', morale:5, fans:850, cash:12000, risk:-6, text:'preserva imagem e reduz conflito.' },
      { id:'aggressive', name:'Atitude ousada', morale:-4, fans:1900, cash:25000, risk:12, text:'gera manchetes e pode viralizar.' },
      { id:'team_first', name:'Proteger a banda', morale:12, fans:450, cash:5000, risk:-10, text:'fortalece integrantes e reduz crise.' },
      { id:'commercial', name:'Aproveitar comercialmente', morale:-8, fans:1200, cash:65000, risk:18, text:'aumenta caixa, mas pressiona identidade artística.' }
    ]
  };
}

function eventScores(save) {
  const events = save.events || createEventState();
  const band = bandStats(save);
  const staff = staffImpact(save.staff || []);
  const current = events.current || createEventState().current;
  const morale = band.morale || 50;
  const ego = Math.round((save.band?.members || createDefaultMembers()).reduce((a,m)=>a+(Number(m.ego)||0),0) / Math.max(1,(save.band?.members||[]).length));
  const crisis = clamp(Math.round((staff.marketing*.28) + (staff.morale*.22) + (staff.negotiation*.20) + morale*.20 + 12 - ego*.08));
  const risk = clamp(Math.round(current.risk + ego*.22 - crisis*.25 + (events.heat||0)*.12));
  const impact = clamp(Math.round(current.impact + band.overall*.18 + staff.marketing*.12));
  const reward = Math.max(0, Math.round(current.reward + (save.band?.fans||0)*0.7 + staff.negotiation*950));
  return { events, current, band, staff, morale, ego, crisis, risk, impact, reward, heat: clamp(events.heat || 0) };
}

function renderEvents() {
  const save = ensureSave(); save.events = save.events || createEventState();
  const s = eventScores(save);
  $('#eventHeat') && ($('#eventHeat').textContent = s.heat);
  $('#eventNarrative') && ($('#eventNarrative').textContent = `${s.current.type}: ${s.current.title}. ${s.current.description}`);
  $('#eventImpact') && ($('#eventImpact').textContent = s.impact);
  $('#eventRisk') && ($('#eventRisk').textContent = s.risk);
  $('#eventReward') && ($('#eventReward').textContent = '$ ' + s.reward.toLocaleString('pt-BR'));
  $('#metricEventMorale') && ($('#metricEventMorale').textContent = s.morale);
  $('#metricEventMorale')?.parentElement?.querySelector('em')?.setAttribute('style', `width:${s.morale}%`);
  $('#metricEventEgo') && ($('#metricEventEgo').textContent = s.ego);
  $('#metricEventEgo')?.parentElement?.querySelector('em')?.setAttribute('style', `width:${s.ego}%`);
  $('#metricEventCrisis') && ($('#metricEventCrisis').textContent = s.crisis);
  $('#metricEventCrisis')?.parentElement?.querySelector('em')?.setAttribute('style', `width:${s.crisis}%`);
  const tone = $('#eventTone'); if (tone) tone.value = s.events.tone || 'professional';
  const choices = $('#eventChoices');
  if (choices) { choices.innerHTML=''; (s.events.choices||[]).forEach(c=>{ const b=document.createElement('button'); b.className='deal-card '+(c.id===s.events.activeChoice?'selected':''); b.dataset.eventChoice=c.id; b.innerHTML=`<strong>${c.name}</strong><span>${c.text}</span><small>Fãs +${c.fans.toLocaleString('pt-BR')} • Caixa $ ${c.cash.toLocaleString('pt-BR')} • Risco ${c.risk>=0?'+':''}${c.risk}</small>`; choices.appendChild(b); }); }
  const hist=$('#eventHistory');
  if (hist) { hist.innerHTML=''; (s.events.history||[]).slice(-8).reverse().forEach(item=>{ const row=document.createElement('div'); row.className='song-row'; row.innerHTML=`<strong>${item.title}</strong><span>${item.text}</span>`; hist.appendChild(row); }); if(!s.events.history?.length) hist.innerHTML='<p class="muted">Nenhum evento resolvido ainda.</p>'; }
}

function persistEventControls() { const save=ensureSave(); save.events=save.events||createEventState(); save.events.tone=$('#eventTone')?.value||save.events.tone; saveGame(save); renderEvents(); }

function generateEvent() {
  const save = ensureSave(); save.events = save.events || createEventState();
  const pool = save.events.pool || createEventState().pool;
  const next = pool[Math.floor(Math.random()*pool.length)] || createEventState().current;
  save.events.current = { ...next }; save.events.heat = clamp((save.events.heat||0) + Math.round(Math.random()*10 - 2));
  saveGame(save); renderEvents();
}

function resolveEvent() {
  const save = ensureSave(); save.events = save.events || createEventState();
  const s = eventScores(save);
  const choice = (save.events.choices||[]).find(c=>c.id===save.events.activeChoice) || createEventState().choices[0];
  const toneMap = { professional:-5, emotional:-1, rebellious:9, silent:4 };
  const finalRisk = clamp(s.risk + (choice.risk||0) + (toneMap[save.events.tone]||0));
  const success = clamp(Math.round(s.impact + s.crisis*.45 - finalRisk*.35 + Math.random()*18));
  const cashGain = Math.round((choice.cash||0) + s.reward * (success/140));
  const fansGain = Math.max(0, Math.round((choice.fans||0) + (success*35) - finalRisk*12));
  const moraleDelta = choice.morale || 0;
  save.band.cash = Math.max(0, Math.round((save.band.cash||0) + cashGain));
  save.band.fans = Math.round((save.band.fans||0) + fansGain);
  save.band.xp = Math.round((save.band.xp||0) + success*18);
  (save.band.members||[]).forEach(m=>{ m.morale = clamp((m.morale||60)+moraleDelta); m.ego = clamp((m.ego||40)+(choice.id==='aggressive'?3:choice.id==='team_first'?-2:0)); });
  save.events.heat = clamp((save.events.heat||0) + Math.round(finalRisk/10) - Math.round(s.crisis/18));
  const grade = success >= 78 ? 'Vitória narrativa' : success >= 58 ? 'Resultado positivo' : finalRisk > 65 ? 'Crise ampliada' : 'Resultado neutro';
  save.events.history = [...(save.events.history||[]), { title: `${grade}: ${s.current.title}`, text:`${choice.name} em tom ${save.events.tone}. Fãs +${fansGain.toLocaleString('pt-BR')} • Caixa +$ ${cashGain.toLocaleString('pt-BR')} • Risco final ${finalRisk}.`, at:new Date().toISOString() }].slice(-30);
  saveGame(save); generateEvent(); syncProfileToUI(save);
}


function createMarketState() {
  return {
    season: '2026 Global Rock Cycle',
    activeRegion: 'Global',
    activeStrategy: 'balanced',
    history: [],
    genres: [
      { id:'rock', name:'Rock', trend:72, volatility:18, audience:'arena', note:'forte em festivais e turnês' },
      { id:'metal', name:'Metal', trend:61, volatility:24, audience:'fandom', note:'fãs fiéis e merch forte' },
      { id:'indie', name:'Indie', trend:66, volatility:28, audience:'cult', note:'cresce com crítica e viral orgânico' },
      { id:'hard_rock', name:'Hard Rock', trend:58, volatility:16, audience:'classic', note:'bom para arenas e nostalgia' },
      { id:'alternative', name:'Alternative', trend:75, volatility:31, audience:'streaming', note:'alto potencial de charts digitais' },
      { id:'experimental', name:'Experimental', trend:43, volatility:42, audience:'niche', note:'gera prestígio, mas risco comercial alto' }
    ],
    regions: [
      { id:'global', name:'Global', demand:68, media:66, festival:70, cost:60 },
      { id:'brasil', name:'Brasil', demand:74, media:62, festival:58, cost:42 },
      { id:'usa', name:'Estados Unidos', demand:71, media:84, festival:82, cost:78 },
      { id:'uk', name:'Reino Unido', demand:76, media:79, festival:75, cost:70 },
      { id:'japan', name:'Japão', demand:63, media:72, festival:64, cost:74 },
      { id:'latam', name:'América Latina', demand:69, media:55, festival:66, cost:50 }
    ],
    rivals: [
      { id:'rival_01', name:'Neon Saints', genre:'Alternative', fans:86000, reputation:64, momentum:68, threat:54 },
      { id:'rival_02', name:'Iron Velvet', genre:'Metal', fans:132000, reputation:71, momentum:57, threat:62 },
      { id:'rival_03', name:'The Black Halos', genre:'Hard Rock', fans:98000, reputation:67, momentum:61, threat:58 },
      { id:'rival_04', name:'Static Mirage', genre:'Indie', fans:74000, reputation:59, momentum:73, threat:51 }
    ]
  };
}

function marketScores(save) {
  save.market = save.market || createMarketState();
  const band = bandStats(save);
  const bandGenre = (save.band?.genre || 'Rock').toLowerCase();
  const genre = save.market.genres.find(g => g.name.toLowerCase() === bandGenre) || save.market.genres[0];
  const region = save.market.regions.find(r => r.name === save.market.activeRegion || r.id === save.market.activeRegion) || save.market.regions[0];
  const staff = staffImpact(save.staff || []);
  const pressure = clamp(Math.round(save.market.rivals.reduce((a,r)=>a+r.threat+r.momentum*.25,0)/Math.max(1,save.market.rivals.length)));
  const opportunity = clamp(Math.round(genre.trend*.36 + region.demand*.22 + region.media*.14 + band.overall*.18 + staff.marketing*.10 - pressure*.12));
  const chartChance = clamp(Math.round(opportunity + (save.band?.fans||0)/9500 + (save.band?.reputation||0)*.15));
  const risk = clamp(Math.round(genre.volatility*.38 + region.cost*.22 + pressure*.21 - staff.negotiation*.12));
  return { genre, region, staff, band, pressure, opportunity, chartChance, risk };
}

function renderMarket() {
  const save = ensureSave(); save.market = save.market || createMarketState();
  const s = marketScores(save);
  $('#marketSeason') && ($('#marketSeason').textContent = save.market.season);
  $('#marketOpportunity') && ($('#marketOpportunity').textContent = s.opportunity);
  $('#marketChartChance') && ($('#marketChartChance').textContent = s.chartChance);
  $('#marketRisk') && ($('#marketRisk').textContent = s.risk);
  $('#marketPressure') && ($('#marketPressure').textContent = s.pressure);
  const region = $('#marketRegion'); if (region) region.value = save.market.activeRegion || 'Global';
  const strat = $('#marketStrategy'); if (strat) strat.value = save.market.activeStrategy || 'balanced';
  const genreList = $('#marketGenreTrends');
  if (genreList) { genreList.innerHTML=''; save.market.genres.forEach(g=>{ const row=document.createElement('div'); row.className='metric-bar'; row.innerHTML=`<span>${g.name}<b>${g.trend}</b></span><i><em style="width:${g.trend}%"></em></i><small>${g.note}</small>`; genreList.appendChild(row); }); }
  const rivalList = $('#marketRivals');
  if (rivalList) { rivalList.innerHTML=''; save.market.rivals.forEach(r=>{ const row=document.createElement('div'); row.className='song-row'; row.innerHTML=`<strong>${r.name}</strong><span>${r.genre} • fãs ${r.fans.toLocaleString('pt-BR')} • reputação ${r.reputation} • momentum ${r.momentum}</span>`; rivalList.appendChild(row); }); }
  const hist = $('#marketHistory');
  if (hist) { hist.innerHTML=''; (save.market.history||[]).slice(-8).reverse().forEach(item=>{ const row=document.createElement('div'); row.className='song-row'; row.innerHTML=`<strong>${item.title}</strong><span>${item.text}</span>`; hist.appendChild(row); }); if(!save.market.history?.length) hist.innerHTML='<p class="muted">Nenhuma leitura de mercado simulada ainda.</p>'; }
}

function persistMarketControls() {
  const save = ensureSave(); save.market = save.market || createMarketState();
  save.market.activeRegion = $('#marketRegion')?.value || save.market.activeRegion || 'Global';
  save.market.activeStrategy = $('#marketStrategy')?.value || save.market.activeStrategy || 'balanced';
  saveGame(save); renderMarket();
}

function simulateMarketWeek() {
  const save = ensureSave(); save.market = save.market || createMarketState();
  persistMarketControls();
  const strategy = save.market.activeStrategy || 'balanced';
  const mods = { balanced: 0, viral: 9, prestige: -4, commercial: 6, underground: -7 };
  save.market.genres = save.market.genres.map(g => ({ ...g, trend: clamp(Math.round(g.trend + (Math.random()*14-6) + (g.name === save.band?.genre ? 3 : 0) + (mods[strategy]||0)*.18)) }));
  save.market.rivals = save.market.rivals.map(r => ({ ...r, momentum: clamp(Math.round(r.momentum + Math.random()*16-6)), threat: clamp(Math.round(r.threat + Math.random()*10-4)), fans: Math.max(1000, Math.round(r.fans * (1 + (r.momentum-50)/1800))) }));
  const s = marketScores(save);
  const gain = Math.max(0, Math.round(s.opportunity*95 + s.chartChance*60 - s.risk*42));
  save.band.fans = Math.round((save.band.fans||0) + gain);
  save.band.reputation = clamp((save.band.reputation||35) + Math.round((s.opportunity-s.risk)/18));
  save.market.history = [...(save.market.history||[]), { title:'Semana de mercado analisada', text:`${s.region.name}: oportunidade ${s.opportunity} • chance de chart ${s.chartChance} • risco ${s.risk} • fãs +${gain.toLocaleString('pt-BR')}`, at:new Date().toISOString() }].slice(-30);
  saveGame(save); renderMarket(); syncProfileToUI(save);
}


function createCoreGameplayState() {
  return {
    careerWeek: 1,
    cycleStep: 'GERENCIAR',
    completedLoops: 0,
    milestones: [],
    log: [{ title: 'Carreira iniciada', text: 'O ciclo principal está ativo: gerenciar, produzir, promover, performar e evoluir.', at: new Date().toISOString() }]
  };
}

function coreMetrics(save) {
  const band = bandStats(save);
  const composition = compositionScores(save);
  const studio = studioScores(save);
  const live = liveShowScores(save);
  const social = socialScores(save);
  const economy = economyScores(save);
  const released = save.release?.published?.length || 0;
  const songs = save.composition?.library?.length || 0;
  const masters = save.studio?.masters?.length || 0;
  const shows = save.liveShow?.history?.length || 0;
  const readiness = clamp(Math.round((band.overall * .22) + (composition.quality * .18) + (studio.quality * .16) + (live.performanceBase * .18) + (social.hype * .13) + (Math.min(100, (save.band?.cash || 0) / 25000) * .13)));
  return { band, composition, studio, live, social, economy, released, songs, masters, shows, readiness };
}

function nextCoreAction(save) {
  const m = coreMetrics(save);
  if ((save.staff || []).filter(x => x.hired).length < 1) return { step: 'GERENCIAR', screen: 'staff', title: 'Contratar staff essencial', text: 'Contrate ao menos um produtor, empresário ou social media para acelerar a carreira.' };
  if (m.songs < 1) return { step: 'PRODUZIR', screen: 'composition', title: 'Compor primeira música', text: 'Monte a estrutura da música e finalize o primeiro rascunho.' };
  if (m.masters < 1) return { step: 'PRODUZIR', screen: 'studio', title: 'Gravar master no estúdio', text: 'Leve a melhor música para gravação, mixagem e masterização.' };
  if (m.released < 1) return { step: 'PROMOVER', screen: 'release', title: 'Lançar o primeiro single', text: 'Publique a master com campanha de marketing para gerar fãs e hype.' };
  if ((save.social?.history || []).length < 1) return { step: 'PROMOVER', screen: 'socialMedia', title: 'Rodar campanha social', text: 'Aumente hype e alcance antes do próximo show.' };
  if (m.shows < 1) return { step: 'PERFORMAR', screen: 'liveShow', title: 'Fazer primeiro show', text: 'Prepare setlist, produção e interação com o público.' };
  if ((save.band?.xp || 0) < 12000) return { step: 'EVOLUIR', screen: 'band', title: 'Evoluir reputação da banda', text: 'Ajuste formação, staff, lançamentos e shows até alcançar novo marco.' };
  return { step: 'EVOLUIR', screen: 'worldTour', title: 'Expandir carreira com turnê', text: 'Escolha uma rota e transforme a banda em marca internacional.' };
}

function updateCoreProgress(save, reason = 'Atualização automática') {
  save.core = save.core || createCoreGameplayState();
  const action = nextCoreAction(save);
  const order = ['GERENCIAR','PRODUZIR','PROMOVER','PERFORMAR','EVOLUIR'];
  const previous = save.core.cycleStep || 'GERENCIAR';
  save.core.cycleStep = action.step;
  if (previous === 'EVOLUIR' && action.step === 'GERENCIAR') save.core.completedLoops = (save.core.completedLoops || 0) + 1;
  save.core.log = [{ title: action.title, text: reason + ' • Próximo passo: ' + action.text, at: new Date().toISOString() }, ...(save.core.log || [])].slice(0, 12);
  saveGame(save);
  return action;
}

function renderCoreGameplay() {
  const save = ensureSave();
  save.core = save.core || createCoreGameplayState();
  const m = coreMetrics(save);
  const action = nextCoreAction(save);
  const stats = $('#coreStats');
  if (stats) stats.innerHTML = `<div>${formatCurrencyLocalized(save.band?.cash || 0)}</div><div>★ ${formatNumberLocalized(save.band?.xp || 0)} XP</div><div>👥 ${formatNumberLocalized(save.band?.fans || 0)} ${tr('fãs')}</div><div>${tr('Reputação:')} ${tr(save.band?.reputation || 'Local')}</div>`;
  $('#coreWeek') && ($('#coreWeek').textContent = tr('Semana') + ' ' + (save.core.careerWeek || 1));
  $('#coreCycle') && ($('#coreCycle').textContent = tr(action.step));
  $('#coreReadiness') && ($('#coreReadiness').textContent = m.readiness + '%');
  $('#coreNextTitle') && ($('#coreNextTitle').textContent = tr(action.title));
  $('#coreNextText') && ($('#coreNextText').textContent = tr(action.text));
  const log = $('#coreLog');
  if (log) {
    log.innerHTML = '';
    (save.core.log || []).slice(0, 4).forEach(item => {
      const row = document.createElement('p');
      row.innerHTML = `<strong>${tr(item.title)}</strong><br><span>${tr(item.text)}</span>`;
      log.appendChild(row);
    });
  }
}

function runSmartCoreAction() {
  const save = ensureSave();
  const action = updateCoreProgress(save, 'Assistente de carreira executado');
  showScreen(action.screen);
}

function advanceCareerWeek() {
  const save = ensureSave();
  save.core = save.core || createCoreGameplayState();
  save.core.careerWeek = (save.core.careerWeek || 1) + 1;
  const m = coreMetrics(save);
  const passiveFans = Math.round((save.band?.fans || 0) * 0.012 + m.social.hype * 9 + (save.release?.published?.length || 0) * 140);
  const passiveCash = Math.round(Math.max(BALANCE.earlyGameCashFloor, (save.release?.published?.length || 0) * 2800 + (save.liveShow?.history?.length || 0) * 1200) - ((save.staff || []).filter(x => x.hired).reduce((a,x)=>a+(x.salary||0),0) / 4));
  save.band.fans = Math.max(0, Math.round((save.band?.fans || 0) + passiveFans));
  save.band.cash = Math.max(0, Math.round((save.band?.cash || 0) + passiveCash));
  save.band.xp = Math.max(0, Math.round((save.band?.xp || 0) + BALANCE.weeklyBaseXp + m.readiness * 4));
  if ((save.band.xp || 0) > 10000) save.band.reputation = 'Regional';
  if ((save.band.xp || 0) > 25000) save.band.reputation = 'Nacional';
  if ((save.band.xp || 0) > 60000) save.band.reputation = 'Internacional';
  updateCoreProgress(save, `Semana avançada: fãs +${passiveFans.toLocaleString('pt-BR')} • caixa ${passiveCash >= 0 ? '+' : ''}$ ${passiveCash.toLocaleString('pt-BR')}`);
  syncProfileToUI(save);
  renderCoreGameplay();
}

function setScreenBackground(id) {
  setRootBackground(id);
  forceOfficialAssetBindings(id);
}

function showScreen(id) {
  const screens = $$('.screen');
  const validScreens = new Set(screens.map(screen => screen.id));
  try {
    const target = validScreens.has(id) ? id : 'mainMenu';
    if (target !== id) reportIssue('INVALID_SCREEN_RECOVERED', new Error(`Tela inexistente: ${id}`), { requested: id });
    screens.forEach(screen => screen.classList.toggle('active', screen.id === target));
    const app = $('#app');
    if (app) app.className = 'app-shell screen-' + target;
    setScreenBackground(target);
    initBandLogoUI();
    applyBandLogoVisual(ensureSave());
    setTimeout(() => forceOfficialAssetBindings(target), 80);
    SafeStore.set('bandLegacy:lastScreen', target);
    if (target === 'lobby') renderCoreGameplay();
    if (target === 'band') renderBand();
    if (target === 'staff') renderStaff();
    if (target === 'composition') renderComposition();
    if (target === 'studio') renderStudio();
    if (target === 'release') renderRelease();
    if (target === 'liveShow') renderLiveShow();
    if (target === 'socialMedia') renderSocial();
    if (target === 'economy') renderEconomy();
    if (target === 'worldTour') renderWorldTour();
    if (target === 'events') renderEvents();
    if (target === 'market') renderMarket();
    if (target === 'loadGame') renderLoadGame();
    if (target === 'releaseCandidate') updateReleasePolishPanel();
    if (target === 'commercialQA') renderCommercialQA();
    if (target === 'assetPipeline') renderAssetPipeline();
    if (target === 'onboarding') renderOnboarding();
    if (target === 'localizationQA') renderLocalizationQA();
    if (target === 'longCampaign') renderLongCampaign();
    if (target === 'worldRanking') renderWorldRanking();
    if (target === 'bandDynamics') renderBandDynamics();
    if (target === 'contracts') renderContracts();
    applyI18n($('#' + target) || document);
    const activeScreen = $('#' + target);
    if (activeScreen) {
      requestAnimationFrame(() => {
        activeScreen.scrollTop = 0;
        activeScreen.scrollLeft = 0;
      });
    }
  } catch (err) {
    reportIssue('SCREEN_SWITCH_RECOVERED', err, { id });
    screens.forEach(screen => screen.classList.toggle('active', screen.id === 'mainMenu'));
  }
}

async function verifyAssets() {
  await Promise.all(REQUIRED_ASSETS.map(src => new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => { reportIssue('ASSET_MISSING_PLACEHOLDER_ACTIVE', new Error(src)); resolve(false); };
    img.src = src;
  })));
}


function getCommercialQAChecks() {
  const save = ensureSave();
  const screens = $$('.screen').map(screen => screen.id);
  const buttons = $$('button[data-screen],button[data-action]').length;
  const languageFilesReady = SUPPORTED_LANGUAGES.every(lang => I18N[lang] && I18N[lang].map);
  const requiredSaveBranches = ['meta','band','members','songs','studio','release','live','social','economy','tour','events','market'];
  const missingSaveBranches = requiredSaveBranches.filter(key => !Object.prototype.hasOwnProperty.call(save, key));
  const missingAssets = diagnostics.filter(item => item.code === 'ASSET_MISSING_PLACEHOLDER_ACTIVE').slice(-20).map(item => item.message);
  return [
    { label: 'Versão visível sincronizada', ok: ($('#buildBadge')?.textContent || '').includes(BUILD_VERSION), detail: BUILD_VERSION },
    { label: 'Telas principais registradas', ok: ['mainMenu','profileCareer','newCareer','lobby','studio','release','liveShow','settings','commercialQA'].every(id => screens.includes(id)), detail: `${screens.length} telas` },
    { label: 'Botões navegáveis detectados', ok: buttons >= 30, detail: `${buttons} controles` },
    { label: 'Save completo sem ramos faltando', ok: missingSaveBranches.length === 0, detail: missingSaveBranches.length ? missingSaveBranches.join(', ') : 'schema completo' },
    { label: 'Slots de save disponíveis', ok: typeof getSaveSlots === 'function' && getSaveSlots().length >= 1, detail: 'sistema local ativo' },
    { label: 'Idiomas PT/EN/ES carregados', ok: languageFilesReady, detail: SUPPORTED_LANGUAGES.join(' / ') },
    { label: 'Catálogo de localização completo', ok: LOCALIZATION_CATALOG_STATS.totalStrings >= 250, detail: `${LOCALIZATION_CATALOG_STATS.totalStrings} strings catalogadas` },
    { label: 'Fullscreen horizontal com fallback', ok: typeof requestFullscreen === 'function' && typeof checkOrientation === 'function', detail: 'fallback browser/mobile' },
    { label: 'Assets obrigatórios verificados', ok: missingAssets.length === 0, detail: missingAssets.length ? `${missingAssets.length} ausentes` : `${REQUIRED_ASSETS.length} caminhos OK` },
    { label: 'Diagnóstico anti-quebra ativo', ok: Array.isArray(diagnostics), detail: `${diagnostics.length} eventos no log` },
    { label: 'Exportação de backup disponível', ok: typeof exportSaveBackup === 'function', detail: 'JSON save backup' },
    { label: 'Asset Pipeline Comercial instalado', ok: typeof renderAssetPipeline === 'function' && Array.isArray(ASSET_PIPELINE_MANIFEST), detail: `${ASSET_PIPELINE_MANIFEST.length} assets mapeados` }
  ];
}

function renderCommercialQA() {
  const checks = getCommercialQAChecks();
  const passed = checks.filter(item => item.ok).length;
  const score = Math.round((passed / checks.length) * 100);
  const scoreEl = $('#qaScore');
  const list = $('#qaChecklist');
  const summary = $('#qaSummary');
  if (scoreEl) scoreEl.textContent = `${score}%`;
  if (list) {
    list.innerHTML = checks.map(item => `<span class="${item.ok ? 'ok' : 'warn'}"><b>${item.ok ? '✓' : '!'}</b><em>${item.label}</em><small>${item.detail}</small></span>`).join('');
  }
  if (summary) {
    const device = (innerWidth < 900 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) ? 'Mobile/tablet' : 'PC/Desktop';
    summary.innerHTML = `
      <span>Build <b>${BUILD_VERSION}</b></span>
      <span>Dispositivo <b>${device}</b></span>
      <span>Orientação <b>${innerWidth >= innerHeight ? 'Horizontal' : 'Vertical'}</b></span>
      <span>Fullscreen <b>${document.fullscreenElement ? 'Ativo' : 'Não ativo'}</b></span>
      <span>Idioma <b>${currentLanguage}</b></span>
      <span>Status <b>${score >= 90 ? 'Aprovado para testes externos' : 'Revisar pendências'}</b></span>`;
  }
  return score;
}

async function runCommercialQA() {
  await verifyAssets();
  const score = renderCommercialQA();
  const save = ensureSave();
  save.meta = { ...(save.meta || {}), lastCommercialQA: new Date().toISOString(), lastCommercialQAScore: score, qaVersion: BUILD_VERSION };
  saveGame(save);
  if (score >= 90) playUiTone('success'); else playUiTone('error');
}

function clearDiagnostics() {
  diagnostics = [];
  SafeStore.set('bandLegacy:diagnostics', JSON.stringify([]));
  updateDiagnosticsPanel();
  renderCommercialQA();
}


function getAssetPipelineStats() {
  const scan = assetPipelineLastScan.length ? assetPipelineLastScan : ASSET_PIPELINE_MANIFEST.map(item => ({ ...item, exists: REQUIRED_ASSETS.includes(item.path) }));
  const total = scan.length;
  const existing = scan.filter(item => item.exists).length;
  const p0Missing = scan.filter(item => item.priority === 'P0' && !item.exists).length;
  const groups = [...new Set(scan.map(item => item.group))];
  const score = total ? Math.round((existing / total) * 100) : 0;
  return { scan, total, existing, p0Missing, groups, score };
}

function renderAssetPipeline() {
  const { scan, total, existing, p0Missing, groups, score } = getAssetPipelineStats();
  const scoreEl = $('#assetPipelineScore');
  const summary = $('#assetPipelineSummary');
  const list = $('#assetPipelineList');
  const grouped = $('#assetGroupSummary');
  if (scoreEl) scoreEl.textContent = `${score}%`;
  if (summary) {
    summary.innerHTML = `
      <span>Manifesto <b>${total} itens</b></span>
      <span>Encontrados agora <b>${existing}</b></span>
      <span>Prioridade P0 faltando <b>${p0Missing}</b></span>
      <span>Grupos <b>${groups.length}</b></span>
      <span>Status comercial <b>${p0Missing ? 'Trocar antes da venda' : 'Apto para QA visual'}</b></span>`;
  }
  if (grouped) {
    grouped.innerHTML = groups.map(group => {
      const items = scan.filter(item => item.group === group);
      const ready = items.filter(item => item.exists).length;
      return `<span>${group}<b>${ready}/${items.length}</b></span>`;
    }).join('');
  }
  if (list) {
    list.innerHTML = scan.map(item => `
      <span class="asset-row ${item.exists ? 'ok' : 'warn'}">
        <b>${item.exists ? '✓' : '!'}</b>
        <em>${item.group} / ${item.key}</em>
        <small>${item.path}<br>Nome final: ${item.finalName} • ${item.priority} • ${item.status}</small>
      </span>`).join('');
  }
}

async function runAssetPipelineScan() {
  const results = await Promise.all(ASSET_PIPELINE_MANIFEST.map(item => new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve({ ...item, exists: true, checkedAt: new Date().toISOString() });
    img.onerror = () => resolve({ ...item, exists: false, checkedAt: new Date().toISOString() });
    img.src = item.path + '?assetCheck=' + Date.now();
  })));
  assetPipelineLastScan = results;
  const save = ensureSave();
  const stats = getAssetPipelineStats();
  save.meta = { ...(save.meta || {}), lastAssetPipelineScan: new Date().toISOString(), assetPipelineScore: stats.score, assetPipelineVersion: BUILD_VERSION };
  save.systems = { ...(save.systems || {}), phase10AssetPipeline: true };
  saveGame(save);
  renderAssetPipeline();
  if (stats.p0Missing === 0) playUiTone('success'); else playUiTone('error');
}

function exportAssetManifest() {
  const payload = {
    project: 'Band Legacy',
    version: BUILD_VERSION,
    buildDate: BUILD_DATE,
    rule: 'ZIP completo com código, dados e docs; assets oficiais podem ser externos, desde que os caminhos deste manifesto sejam mantidos.',
    manifest: ASSET_PIPELINE_MANIFEST
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `BandLegacy_AssetManifest_${BUILD_VERSION}.json`;
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}


const ONBOARDING_MISSIONS = [
  { id: 'identity', screen: 'profileCareer', title: { 'pt-BR': 'Criar identidade', 'en-US': 'Create identity', 'es-ES': 'Crear identidad' }, text: { 'pt-BR': 'Defina artista, país, cidade e nome da banda.', 'en-US': 'Set artist, country, city and band name.', 'es-ES': 'Define artista, país, ciudad y nombre de la banda.' }, reward: { cash: 2500, fans: 80, xp: 90 } },
  { id: 'compose', screen: 'composition', title: { 'pt-BR': 'Compor primeiro single', 'en-US': 'Write the first single', 'es-ES': 'Componer el primer single' }, text: { 'pt-BR': 'Escolha gênero, BPM, tom, intensidade e estrutura.', 'en-US': 'Choose genre, BPM, key, intensity and structure.', 'es-ES': 'Elige género, BPM, tonalidad, intensidad y estructura.' }, reward: { cash: 1500, fans: 120, xp: 140 } },
  { id: 'studio', screen: 'studio', title: { 'pt-BR': 'Gravar uma master', 'en-US': 'Record a master', 'es-ES': 'Grabar una master' }, text: { 'pt-BR': 'Selecione sala, produtor, direção sonora e finalize uma master.', 'en-US': 'Select room, producer, sonic direction and finish a master.', 'es-ES': 'Selecciona sala, productor, dirección sonora y termina una master.' }, reward: { cash: 3000, fans: 150, xp: 180 } },
  { id: 'release', screen: 'release', title: { 'pt-BR': 'Lançar música', 'en-US': 'Release music', 'es-ES': 'Lanzar música' }, text: { 'pt-BR': 'Prepare campanha, janela comercial, plataforma foco e preço.', 'en-US': 'Prepare campaign, launch window, target platform and pricing.', 'es-ES': 'Prepara campaña, ventana comercial, plataforma foco y precio.' }, reward: { cash: 5000, fans: 350, xp: 230 } },
  { id: 'show', screen: 'liveShow', title: { 'pt-BR': 'Fazer o primeiro show', 'en-US': 'Play the first show', 'es-ES': 'Hacer el primer show' }, text: { 'pt-BR': 'Monte setlist, controle energia, resolva falhas e finalize o show.', 'en-US': 'Build a setlist, control energy, solve issues and finish the show.', 'es-ES': 'Monta setlist, controla energía, resuelve fallas y termina el show.' }, reward: { cash: 8500, fans: 600, xp: 300 } },
  { id: 'advance', screen: 'lobby', title: { 'pt-BR': 'Avançar a carreira', 'en-US': 'Advance the career', 'es-ES': 'Avanzar la carrera' }, text: { 'pt-BR': 'Volte ao lobby, avance a semana e leia o log de evolução.', 'en-US': 'Return to the lobby, advance the week and read the progression log.', 'es-ES': 'Vuelve al lobby, avanza la semana y lee el registro de progreso.' }, reward: { cash: 4500, fans: 400, xp: 250 } }
];

function getOnboardingState(save = ensureSave()) {
  save.onboarding = save.onboarding || { completed: [], rewardsClaimed: [], lastOpened: new Date().toISOString(), version: BUILD_VERSION };
  save.onboarding.completed = Array.isArray(save.onboarding.completed) ? save.onboarding.completed : [];
  save.onboarding.rewardsClaimed = Array.isArray(save.onboarding.rewardsClaimed) ? save.onboarding.rewardsClaimed : [];
  return save.onboarding;
}

function translateOnboarding(value) {
  if (!value) return '';
  return value[currentLanguage] || value['pt-BR'] || Object.values(value)[0] || '';
}

function inferOnboardingCompletion(save = ensureSave()) {
  const state = getOnboardingState(save);
  const completed = new Set(state.completed);
  if (save.player?.name && save.band?.name) completed.add('identity');
  if ((save.songs || []).length > 0 || save.composition?.lastQuality) completed.add('compose');
  if ((save.studio?.masters || []).length > 0 || (save.studio?.projects || []).some(p => p.mastered)) completed.add('studio');
  if ((save.release?.history || []).length > 0 || (save.releases || []).length > 0) completed.add('release');
  if ((save.live?.history || []).length > 0 || (save.shows || []).length > 0) completed.add('show');
  if ((save.core?.week || save.week || 1) > 1) completed.add('advance');
  state.completed = [...completed].filter(id => ONBOARDING_MISSIONS.some(m => m.id === id));
  state.version = BUILD_VERSION;
  saveGame(save, { silent: true });
  return state;
}

function renderOnboarding() {
  const save = ensureSave();
  const state = inferOnboardingCompletion(save);
  const completed = new Set(state.completed);
  const total = ONBOARDING_MISSIONS.length;
  const done = ONBOARDING_MISSIONS.filter(m => completed.has(m.id)).length;
  const pct = Math.round((done / total) * 100);
  $('#onboardingScore') && ($('#onboardingScore').textContent = pct + '%');
  $('#onboardingProgressBar') && ($('#onboardingProgressBar').style.width = pct + '%');
  const langLabel = currentLanguage === 'pt-BR' ? 'Português do Brasil' : currentLanguage === 'en-US' ? 'English' : 'Español';
  $('#onboardingLangBadge') && ($('#onboardingLangBadge').textContent = langLabel + ' • ' + BUILD_VERSION);
  const headline = currentLanguage === 'pt-BR' ? 'Primeira hora de jogo' : currentLanguage === 'en-US' ? 'First hour experience' : 'Primera hora de juego';
  const narrative = currentLanguage === 'pt-BR'
    ? 'Complete missões curtas para entender o ciclo comercial: identidade, música, estúdio, lançamento, show e evolução semanal.'
    : currentLanguage === 'en-US'
      ? 'Complete short missions to learn the commercial loop: identity, music, studio, release, live show and weekly progression.'
      : 'Completa misiones cortas para aprender el ciclo comercial: identidad, música, estudio, lanzamiento, show y progresión semanal.';
  $('#onboardingHeadline') && ($('#onboardingHeadline').textContent = headline);
  $('#onboardingNarrative') && ($('#onboardingNarrative').textContent = narrative);
  const missionList = $('#onboardingMissionList');
  if (missionList) {
    missionList.innerHTML = ONBOARDING_MISSIONS.map((m, index) => {
      const ok = completed.has(m.id);
      const rewardText = `+$ ${m.reward.cash.toLocaleString('pt-BR')} • +${m.reward.fans} fãs • +${m.reward.xp} XP`;
      return `<div class="onboarding-mission ${ok ? 'done' : ''}"><b>${ok ? '✓' : index + 1}</b><div><strong>${translateOnboarding(m.title)}</strong><span>${translateOnboarding(m.text)}</span><em>${rewardText}</em></div><button data-screen="${m.screen}">${ok ? 'Revisar' : 'Ir'}</button></div>`;
    }).join('');
  }
  const rewardList = $('#onboardingRewardList');
  if (rewardList) {
    const claimed = new Set(state.rewardsClaimed);
    rewardList.innerHTML = ONBOARDING_MISSIONS.map(m => {
      const ok = completed.has(m.id);
      const got = claimed.has(m.id);
      return `<div><strong>${translateOnboarding(m.title)}</strong><span>${ok ? (got ? 'Recompensa recebida' : 'Pronta para resgate') : 'Pendente'} • $ ${m.reward.cash.toLocaleString('pt-BR')} • ${m.reward.fans} fãs • ${m.reward.xp} XP</span></div>`;
    }).join('');
  }
  const timeline = $('#onboardingTimeline');
  if (timeline) {
    const steps = [
      ['00-05 min','Identidade visual, idioma, full screen horizontal e primeiro save.'],
      ['05-15 min','Composição do primeiro single com escolhas musicais claras.'],
      ['15-30 min','Estúdio: sala, produtor, takes, mix e master.'],
      ['30-45 min','Lançamento: marketing, social, reviews e receita inicial.'],
      ['45-60 min','Show ao vivo, setlist, público, merch e avanço de semana.']
    ];
    timeline.innerHTML = steps.map(([time, text]) => `<div><b>${time}</b><span>${text}</span></div>`).join('');
  }
}

function claimOnboardingReward() {
  const save = ensureSave();
  const state = inferOnboardingCompletion(save);
  const completed = new Set(state.completed);
  const claimed = new Set(state.rewardsClaimed);
  let cash = 0, fans = 0, xp = 0, count = 0;
  ONBOARDING_MISSIONS.forEach(m => {
    if (completed.has(m.id) && !claimed.has(m.id)) {
      cash += m.reward.cash; fans += m.reward.fans; xp += m.reward.xp; count += 1; claimed.add(m.id);
    }
  });
  if (count === 0) { updateSaveStatus('Nenhuma recompensa nova de onboarding.'); playUiTone('error'); renderOnboarding(); return; }
  save.money = Math.round((save.money || 0) + cash);
  save.fans = Math.round((save.fans || 0) + fans);
  save.xp = Math.round((save.xp || 0) + xp);
  state.rewardsClaimed = [...claimed];
  save.meta = { ...(save.meta || {}), lastOnboardingReward: new Date().toISOString(), onboardingVersion: BUILD_VERSION };
  saveGame(save);
  syncProfileToUI(save);
  renderCoreGameplay();
  renderOnboarding();
  updateSaveStatus(`Onboarding: ${count} recompensa(s) • +$ ${cash.toLocaleString('pt-BR')} • +${fans} fãs • +${xp} XP`);
  playUiTone('success');
}

function resetOnboarding() {
  const save = ensureSave();
  save.onboarding = { completed: [], rewardsClaimed: [], lastReset: new Date().toISOString(), version: BUILD_VERSION };
  saveGame(save);
  renderOnboarding();
  updateSaveStatus('Tutorial guiado resetado.');
}

function exportOnboardingPlan() {
  const payload = { project: 'Band Legacy', version: BUILD_VERSION, phase: BUILD_PHASE, languages: SUPPORTED_LANGUAGES, firstHourMissions: ONBOARDING_MISSIONS };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `BandLegacy_OnboardingPlan_${BUILD_VERSION}.json`;
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}


function localizationCoverage() {
  const total = LOCALIZATION_CATALOG_STATS.totalStrings || 0;
  const enTotal = Object.keys(I18N['en-US'].map || {}).length;
  const esTotal = Object.keys(I18N['es-ES'].map || {}).length;
  const missing = getLocalizationMissing();
  const coverage = total ? Math.round(Math.min(enTotal, esTotal) / total * 100) : 0;
  return { total, enTotal, esTotal, missing, coverage: clamp(coverage, 0, 100) };
}

function renderLocalizationQA() {
  const stats = localizationCoverage();
  const scoreEl = $('#localizationScore');
  const summary = $('#localizationSummary');
  const list = $('#localizationChecklist');
  if (scoreEl) scoreEl.textContent = `${stats.coverage}%`;
  if (summary) summary.innerHTML = `
    <span>Strings <b>${stats.total}</b></span>
    <span>EN <b>${stats.enTotal}</b></span>
    <span>ES <b>${stats.esTotal}</b></span>
    <span>Pendências runtime <b>${stats.missing.length}</b></span>
    <span>Idioma atual <b>${currentLanguage}</b></span>`;
  const checks = [
    { label: 'PT-BR como fonte editorial', ok: true, detail: 'texto-base preservado' },
    { label: 'Inglês internacional carregado', ok: stats.enTotal >= stats.total, detail: `${stats.enTotal} entradas` },
    { label: 'Espanhol internacional carregado', ok: stats.esTotal >= stats.total, detail: `${stats.esTotal} entradas` },
    { label: 'Textos dinâmicos conectados ao tr()', ok: typeof tr === 'function' && typeof translateOnboarding === 'function', detail: 'renderização runtime' },
    { label: 'Números e moeda localizados', ok: typeof formatCurrencyLocalized === 'function', detail: 'locale ativo' },
    { label: 'Fallback anti-quebra', ok: typeof reportLocalizationMissing === 'function', detail: 'pendências registradas sem travar' },
    { label: 'Pacote exportável para revisão externa', ok: true, detail: 'JSON PT/EN/ES' }
  ];
  if (list) list.innerHTML = checks.map(item => `<span class="${item.ok ? 'ok' : 'warn'}"><b>${item.ok ? '✓' : '!'}</b><em>${tr(item.label)}</em><small>${tr(item.detail)}</small></span>`).join('');
  return stats.coverage;
}

function exportLocalizationPack() {
  const pack = {
    version: BUILD_VERSION,
    buildName: BUILD_NAME,
    exportedAt: new Date().toISOString(),
    languages: SUPPORTED_LANGUAGES,
    stats: localizationCoverage(),
    strings: {
      'pt-BR': { locale: 'pt-BR', map: {} },
      'en-US': { locale: 'en-US', map: I18N['en-US'].map },
      'es-ES': { locale: 'es-ES', map: I18N['es-ES'].map }
    },
    editorialRules: [
      'Keep BAND LEGACY, character names, venues and music genre labels unchanged when they are brand/style terms.',
      'Use Brazilian Portuguese as the source of truth.',
      'Do not hardcode new UI strings outside the localization catalog.',
      'Fallback must never block gameplay.'
    ]
  };
  const blob = new Blob([JSON.stringify(pack, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `BandLegacy_Localization_${BUILD_VERSION}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 500);
  playUiTone('success');
}

function bindUI() {
  const languageSelect = $('#languageSelect');
  const settingsLanguageSelect = $('#settingsLanguageSelect');
  if (languageSelect) languageSelect.addEventListener('change', event => setLanguage(event.target.value));
  if (settingsLanguageSelect) settingsLanguageSelect.addEventListener('change', event => setLanguage(event.target.value));
  const audioToggle = $('#audioToggle');
  if (audioToggle) { audioToggle.value = getUiSetting('audio', 'on'); audioToggle.addEventListener('change', event => setAudioPreference(event.target.value)); }
  document.addEventListener('click', event => {
    const btn = event.target.closest('button');
    if (!btn) return;
    btn.classList.add('tap-pulse');
    setTimeout(() => btn.classList.remove('tap-pulse'), 260);
    playUiTone(btn.dataset.screen ? 'nav' : 'tap');

    const memberBtn = btn.closest('[data-member-index]');
    if (memberBtn) {
      selectedMemberIndex = Number(memberBtn.dataset.memberIndex) || 0;
      renderBand();
      return;
    }


    const loadSlotBtn = btn.closest('[data-load-slot]');
    if (loadSlotBtn) { loadSlot(loadSlotBtn.dataset.loadSlot); return; }
    const newSlotBtn = btn.closest('[data-new-slot]');
    if (newSlotBtn) { startNewGame(newSlotBtn.dataset.newSlot); return; }
    const deleteSlotBtn = btn.closest('[data-delete-slot]');
    if (deleteSlotBtn) { if (!window.confirm || window.confirm('Apagar este slot de save?')) deleteSlot(deleteSlotBtn.dataset.deleteSlot); return; }

    if (btn.dataset.action === 'startNewGame') { startNewGame(findFirstEmptySlot()); return; }
    if (btn.dataset.action === 'continueGame') { continueGame(); return; }
    if (btn.dataset.action === 'manualSave') { manualSave(); return; }
    if (btn.dataset.action === 'advanceCareerWeek') { advanceCareerWeek(); return; }
    if (btn.dataset.action === 'simulateLongCampaign') { simulateLongCampaign(); return; }
    if (btn.dataset.action === 'recoverCampaignTeam') { recoverCampaignTeam(); return; }
    if (btn.dataset.action === 'smartCoreAction') { runSmartCoreAction(); return; }
    if (btn.id === 'tryFullscreenBtn' || btn.dataset.action === 'fullscreen') requestFullscreen();
    if (btn.dataset.action === 'showTutorial') { showTutorial(true); return; }
    if (btn.dataset.action === 'completeTutorial') { completeTutorial(); return; }
    if (btn.dataset.action === 'exportSaveBackup') { exportSaveBackup(); return; }
    if (btn.dataset.action === 'runCommercialQA') { runCommercialQA(); return; }
    if (btn.dataset.action === 'clearDiagnostics') { clearDiagnostics(); return; }
    if (btn.dataset.action === 'runAssetPipelineScan') { runAssetPipelineScan(); return; }
    if (btn.dataset.action === 'exportAssetManifest') { exportAssetManifest(); return; }
    if (btn.dataset.action === 'claimOnboardingReward') { claimOnboardingReward(); return; }
    if (btn.dataset.action === 'resetOnboarding') { resetOnboarding(); return; }
    if (btn.dataset.action === 'exportOnboardingPlan') { exportOnboardingPlan(); return; }
    if (btn.dataset.action === 'exportLocalizationPack') { exportLocalizationPack(); return; }
    if (btn.dataset.action === 'saveProfile') { persistProfile(); showScreen('newCareer'); return; }
    if (btn.dataset.action === 'saveBand') { persistBand(); return; }
    if (btn.dataset.action === 'saveMember') { saveSelectedMember(); return; }
    if (btn.dataset.action === 'randomizeMember') { randomizeMember(); return; }
    if (btn.dataset.action === 'staffMonth') { staffMonthSimulation(); return; }
    if (btn.dataset.action === 'finishSong') { finishSongDraft(); return; }
    if (btn.dataset.action === 'generateSongIdea') { generateSongIdea(); return; }
    if (btn.dataset.action === 'improveSong') { improveSong(); return; }
    if (btn.dataset.action === 'autoTuneStudio') { autoTuneStudio(); return; }
    if (btn.dataset.action === 'simulateStudioTake') { simulateStudioTake(); return; }
    if (btn.dataset.action === 'finishStudioMaster') { finishStudioMaster(); return; }
    if (btn.dataset.action === 'autoTuneRelease') { autoTuneRelease(); return; }
    if (btn.dataset.action === 'publishRelease') { publishRelease(); return; }
    if (btn.dataset.action === 'autoTuneShow') { autoTuneShow(); return; }
    if (btn.dataset.action === 'startLiveShow') { startLiveShow(); return; }
    if (btn.dataset.action === 'liveBoostCrowd') { liveBoostCrowd(); return; }
    if (btn.dataset.action === 'liveSolo') { liveSoloMoment(); return; }
    if (btn.dataset.action === 'liveFixTech') { liveFixTechnicalIssue(); return; }
    if (btn.dataset.action === 'liveCrowdChant') { liveCrowdChant(); return; }
    if (btn.dataset.action === 'liveEncore') { liveEncoreMoment(); return; }
    if (btn.dataset.action === 'liveFinale') { finishLiveShow(); return; }
    if (btn.dataset.action === 'autoTuneSocial') { autoTuneSocial(); return; }
    if (btn.dataset.action === 'runSocialAction') { runSocialAction(); return; }
    if (btn.dataset.action === 'simulateEconomyMonth') { simulateEconomyMonth(); return; }
    if (btn.dataset.action === 'launchWorldTour') { launchWorldTour(); return; }
    if (btn.dataset.action === 'restTourCrew') { restTourCrew(); return; }
    if (btn.dataset.action === 'generateEvent') { generateEvent(); return; }
    if (btn.dataset.action === 'resolveEvent') { resolveEvent(); return; }
    if (btn.dataset.action === 'simulateMarketWeek') { simulateMarketWeek(); return; }
    if (btn.dataset.action === 'processAnnualAwards') { processAnnualAwards(); return; }
    if (btn.dataset.action === 'bandMeeting') { bandMeeting(); return; }
    if (btn.dataset.action === 'teamBonding') { teamBonding(); return; }
    if (btn.dataset.action === 'generateBandConflict') { generateBandConflict(); return; }
    if (btn.dataset.action === 'resolveBandConflict') { resolveBandConflict(); return; }
    if (btn.dataset.action === 'negotiateSelectedContract') { negotiateSelectedContract(); return; }
    if (btn.dataset.action === 'signSelectedContract') { signSelectedContract(); return; }
    if (btn.dataset.action === 'terminateActiveContract') { terminateActiveContract(); return; }
    if (btn.dataset.contractOffer) { const save=ensureSave(); save.contracts=save.contracts||createContractsState(); save.contracts.selectedType='label'; save.contracts.selectedId=btn.dataset.contractOffer; saveGame(save); renderContracts(); return; }
    if (btn.dataset.contractSponsor) { const save=ensureSave(); save.contracts=save.contracts||createContractsState(); save.contracts.selectedType='sponsor'; save.contracts.selectedId=btn.dataset.contractSponsor; saveGame(save); renderContracts(); return; }
    if (btn.dataset.labelDeal) { const save=ensureSave(); save.economy=save.economy||createEconomyState(); save.economy.activeDeal=btn.dataset.labelDeal; saveGame(save); renderEconomy(); return; }
    if (btn.dataset.sponsorDeal) { const save=ensureSave(); save.economy=save.economy||createEconomyState(); save.economy.activeSponsor=btn.dataset.sponsorDeal; saveGame(save); renderEconomy(); return; }
    if (btn.dataset.tourRoute) { const save=ensureSave(); save.tour=save.tour||createWorldTourState(); save.tour.activeRoute=btn.dataset.tourRoute; saveGame(save); renderWorldTour(); return; }
    if (btn.dataset.eventChoice) { const save=ensureSave(); save.events=save.events||createEventState(); save.events.activeChoice=btn.dataset.eventChoice; saveGame(save); renderEvents(); return; }
    if (btn.dataset.liveSongIndex) { toggleSetlistSong(Number(btn.dataset.liveSongIndex)); return; }
    if (btn.dataset.releaseMasterIndex) { selectReleaseMaster(Number(btn.dataset.releaseMasterIndex)); return; }
    if (btn.dataset.studioRoomId) { selectStudioRoom(btn.dataset.studioRoomId); return; }
    if (btn.dataset.studioProjectIndex) { selectStudioProject(Number(btn.dataset.studioProjectIndex)); return; }
    if (btn.dataset.partId) { toggleCompositionPart(btn.dataset.partId); return; }
    if (btn.dataset.staffId) { toggleStaff(btn.dataset.staffId); return; }
    if (btn.dataset.action === 'resetSave') { resetActiveSave(); renderBand(); showScreen('profileCareer'); return; }
    const target = btn.dataset.screen || btn.dataset.action;
    if (target) showScreen(target);
  });

  document.addEventListener('click', event => {
    const logoBtn = event.target.closest('[data-logo-choice]');
    if (logoBtn) {
      document.querySelectorAll('[data-logo-choice]').forEach(b => b.classList.remove('selected'));
      logoBtn.classList.add('selected');
      const save = ensureSave(); save.band.logo = logoBtn.dataset.logoChoice || 'crown'; saveGame(save); applyBandLogoVisual(save); return;
    }
    const avatarBtn = event.target.closest('[data-avatar]');
    if (!avatarBtn) return;
    $$('#avatarChoices button').forEach(b => b.classList.remove('selected'));
    avatarBtn.classList.add('selected');
    persistProfile();
  });

  ['profileArtistInput','profileCityInput','profileCountry'].forEach(id => { const el = $('#'+id); if (el) el.addEventListener('input', persistProfile); if (el) el.addEventListener('change', persistProfile); });
  ['songTitleInput','songGenreSelect','songThemeInput','songBpmInput','songKeySelect','songIntensityInput','songStructureSelect','songLyricInput'].forEach(id => { const el = $('#'+id); if (el) el.addEventListener('input', persistCompositionMeta); if (el) el.addEventListener('change', persistCompositionMeta); });
  ['merchFocus'].forEach(id => { const el = $('#'+id); if (el) el.addEventListener('input', persistEconomyControls); if (el) el.addEventListener('change', persistEconomyControls); });
  ['eventTone'].forEach(id => { const el = $('#'+id); if (el) el.addEventListener('input', persistEventControls); if (el) el.addEventListener('change', persistEventControls); });
  ['marketRegion','marketStrategy'].forEach(id => { const el = $('#'+id); if (el) el.addEventListener('input', persistMarketControls); if (el) el.addEventListener('change', persistMarketControls); });
  ['contractPriority'].forEach(id => { const el = $('#'+id); if (el) el.addEventListener('change', persistContractControls); });
  ['campaignHorizon','campaignStrategy'].forEach(id => { const el = $('#'+id); if (el) el.addEventListener('change', persistCampaignControls); });
  ['tourTransport','tourCrew'].forEach(id => { const el = $('#'+id); if (el) el.addEventListener('input', persistTourControls); if (el) el.addEventListener('change', persistTourControls); });
  ['socialAction','socialTone','socialBudgetInput'].forEach(id => { const el = $('#'+id); if (el) el.addEventListener('input', persistSocialControls); if (el) el.addEventListener('change', persistSocialControls); });
  ['liveVenue','liveTicketInput','liveProductionInput'].forEach(id => { const el = $('#'+id); if (el) el.addEventListener('input', persistLiveControls); if (el) el.addEventListener('change', persistLiveControls); });
  ['releaseFormat','releasePlatform','releaseMarketingInput','releaseVideoInput','releasePrInput','releaseWindow','releasePricing'].forEach(id => { const el = $('#'+id); if (el) el.addEventListener('input', persistReleaseControls); if (el) el.addEventListener('change', persistReleaseControls); });
  ['studioBudgetInput','studioTakesInput','studioMixInput','studioMasterInput','studioProducerSelect','studioSonicDirection'].forEach(id => { const el = $('#'+id); if (el) el.addEventListener('input', persistStudioControls); if (el) el.addEventListener('change', persistStudioControls); });
  ['bandNameInput','bandFormation','bandGenre'].forEach(id => { const el = $('#'+id); if (el) el.addEventListener('input', persistBand); if (el) el.addEventListener('change', persistBand); });

  $('#artistInput')?.addEventListener('input', event => {
    const save = ensureSave();
    save.player.name = event.target.value || 'River Crow';
    saveGame(save);
    syncProfileToUI(save);
  });

  document.addEventListener('pointerdown', () => { unlockAudio(); if (innerWidth < 900) requestFullscreen(); }, { once: true });
  window.addEventListener('resize', checkOrientation);
  window.addEventListener('resize', applyResponsiveUXProfile);
  window.addEventListener('orientationchange', () => setTimeout(checkOrientation, 250));
  window.addEventListener('orientationchange', () => setTimeout(applyResponsiveUXProfile, 250));
  document.addEventListener('fullscreenchange', checkOrientation);
}


function applyResponsiveUXProfile() {
  try {
    const root = document.documentElement;
    const body = document.body;
    const app = $('#app');
    const w = window.innerWidth || 0;
    const h = window.innerHeight || 0;
    const shorter = Math.min(w, h);
    const compact = h <= 540 || shorter <= 440;
    const narrow = w <= 1180 || h <= 720;
    const tightHeight = h <= 500;
    const tablet = shorter >= 700 && w <= 1366;
    body.classList.toggle('ux-compact', compact);
    body.classList.toggle('ux-narrow', narrow);
    body.classList.toggle('ux-tight-height', tightHeight);
    body.classList.toggle('ux-tablet', tablet);
    root.style.setProperty('--screen-top-offset', compact ? '92px' : '72px');
    root.style.setProperty('--screen-pad', compact ? '12px' : '20px');
    root.style.setProperty('--panel-pad', compact ? '16px' : '28px');
    root.style.setProperty('--avatar-tile-size', compact ? '40px' : '48px');
    root.style.setProperty('--tile-min-h', compact ? '140px' : '210px');
    root.style.setProperty('--hero-scale', compact ? '0.78' : (h <= 640 ? '0.88' : '1'));
    root.style.setProperty('--top-bar-height', compact ? '88px' : '72px');
    body.dataset.viewport = `${w}x${h}`;
    if (app) app.dataset.viewport = body.dataset.viewport;
    const badge = document.querySelector('.mobile-debug-badge');
    if (badge) {
      const mode = compact ? 'COMPACT' : narrow ? 'ADAPT' : 'FULL';
      badge.textContent = `${BUILD_VERSION} • ${w}x${h} • ${mode}`;
    }
  } catch (err) {
    reportIssue('RESPONSIVE_UX_PROFILE', err);
  }
}

function boot() {
  try {
    const buildBadge = $('#buildBadge');
    if (buildBadge) buildBadge.textContent = BUILD_VERSION;
    document.body.dataset.build = BUILD_VERSION;
    document.body.dataset.phase = BUILD_PHASE;
    diagnostics = SafeStore.json('bandLegacy:diagnostics', []);
    currentLanguage = getLanguage();
    const save = ensureSave();
    audioEnabled = getUiSetting('audio', 'on') !== 'off';
    showReleaseLoading();
    bindUI();
    initAvatarChoices();
    syncProfileToUI(save);
    renderBand();
    renderStaff();
    renderLoadGame();
    renderComposition();
    renderStudio();
    renderRelease();
    renderLiveShow();
    renderSocial();
    renderEvents();
    renderCoreGameplay();
    renderOnboarding();
    renderLocalizationQA();
    renderLongCampaign();
    renderContracts();
    checkOrientation();
    applyResponsiveUXProfile();
    verifyAssets();
    const screens = $$('.screen');
    const validScreens = new Set(screens.map(screen => screen.id));
    const last = SafeStore.get('bandLegacy:lastScreen', 'mainMenu');
    showScreen(validScreens.has(last) ? last : 'mainMenu');
    setTimeout(applyResponsiveUXProfile, 90);
    applyI18n();
    updateDiagnosticsPanel();
    updateReleasePolishPanel();
    renderCommercialQA();
    setTimeout(() => { showTutorial(false); forceOfficialAssetBindings(SafeStore.get('bandLegacy:lastScreen', 'mainMenu')); applyBandLogoVisual(ensureSave()); }, 700);
    applyI18n();
  } catch (err) {
    reportIssue('BOOT_SAFE_MODE', err);
    document.body.classList.add('safe-mode');
    showScreen('mainMenu');
  }
}

document.addEventListener('DOMContentLoaded', boot);
