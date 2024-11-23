export type Spell = {
    _id: string;
    spellLevels: number[];
    id: number;
    nameId: number;
    name: LocalizedString;
    descriptionId: number;
    description: LocalizedString;
    typeId: number;
    order: number;
    scriptParams: string | null;
    scriptParamsCritical: string | null;
    scriptId: number | null;
    scriptIdCritical: number | null;
    iconId: number;
    verbose_cast: boolean;
    default_zone: unknown | null;
    bypassSummoningLimit: boolean;
    canAlwaysTriggerSpells: boolean;
    adminName: string | null;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    __v: number;
    defaultPreviewZone: unknown | null;
    verboseCast: boolean;
    img: string; // URL string
};

type LocalizedString = {
    de: string;
    en: string;
    es: string;
    fr: string;
    it: string;
    pt: string;
    id: number;
};


type Character = {
    id: string;
    shortName: string;
    description: LocalizedString;
    level: number;
    spells: Spell[];
    img: string;
};



export type state = {
    isLoading: boolean;
    error: string;
    spell: Spell;
    character: Character;
}