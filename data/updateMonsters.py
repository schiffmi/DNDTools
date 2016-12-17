### convert monsters json file to a more usable format
import json

class Monster():
    def __init__(self, monster):
        self.name = monster.pop('name')
        self.size = monster.pop('size')
        self.type = monster.pop('type')
        self.subtype = monster.pop('subtype')
        self.alignment = monster.pop('alignment')
        self.armor_class= monster.pop('armor_class')
        self.hit_points = monster.pop('hit_points')
        self.hit_dice = monster.pop('hit_dice')
        self.speed = monster.pop('speed')
        self.challenge_rating = monster.pop('challenge_rating')

        self.abilities = {
            'strength': monster.pop('strength'),
            'dexterity': monster.pop('dexterity'),
            'constitution': monster.pop('constitution'),
            'intelligence': monster.pop('intelligence'),
            'wisdom': monster.pop('wisdom'),
            'charisma': monster.pop('charisma')
        }

        self.damage_vulnerabilities = monster.pop('damage_vulnerabilities', "")
        self.damage_resistances= monster.pop('damage_resistances', "")
        self.damage_immunities = monster.pop('damage_immunities', "")
        self.condition_immunities = monster.pop('condition_immunities', "")
        
        self.senses = monster.pop('senses', "")
        self.languages = monster.pop('languages', "")
        self.special_abilities = monster.pop('special_abilities', [])
        self.actions = monster.pop('actions', []);
        self.legendary_actions = monster.pop('legendary_actions', [])
        self.reactions = monster.pop('reactions', [])
        self.saves = {k.replace('_save', ''):v for (k,v) in monster.items() if '_save' in k}
        for save in self.saves:
            monster.pop(save + '_save')
        self.checks = monster

    def asDict(self):
        return dict( (k,v) for (k, v) in self.__dict__.items() )

    def __repr__(self):
        return 'Name: {}'.format(self.name)

class Spell():
    def __init__(self, spell):
        self.name = spell.pop('name');
        self.desc = spell.pop('desc').replace('<p>','').replace('</p>','')
        self.page = spell.pop('page')
        self.higher_level = spell.pop('higher_level', '').replace('<p>','').replace('</p>','')
        self.range = spell.pop('range')
        self.ritual = spell.pop('ritual', '')
        self.concentration = spell.pop('concentration', '')
        self.material = spell.pop('material', '')
        self.duration = spell.pop('duration', '')
        self.casting_time = spell.pop('casting_time', '')
        self.components = spell.pop('components', '')
        self.level = spell.pop('level', '')
        self.requirements = spell
        

    def asDict(self):
        return dict( (k,v) for (k, v) in self.__dict__.items() )

    def __repr__(self):
        return 'Name: {}'.format(self.name)

if __name__ == '__main__':
    data = {};
    with open('./5e-SRD-Monsters.json') as monstersjson:
        data = json.load(monstersjson)
    monsters = { "monsters" : [ Monster(monster).asDict() for monster in data['monsters'] ] }
    
    with open('./5e-SRD-Spells.json') as spellsjson:
        data = json.load(spellsjson)
    spells = { "spells" : [ Spell(spell).asDict() for spell in data['spells'] ] }
    

    #print(monsters)
    with open('./monsters.min.json', 'w') as outputFile:
        json.dump(monsters, outputFile)

    with open('./spells.min.json', 'w') as outputFile:
        json.dump(spells, outputFile)

    