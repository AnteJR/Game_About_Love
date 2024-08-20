// ACCES TO CHARACTER STAT :
// characterStats.secondary["NAME"].metAlmaz

const characterStats = {
    main: {
        almaz: {
            metLove: false,
            trustsLove: 0.5,

            damage: {
                eye: false,
                head: true,
                leftLeg: true,
                rightLeg: true,
                leftArm: true,
                rightArm: false,
                back: true,
                systems: true
            },
            
            upgrades: {
                eye: false,
                legs: false,
                arms: false,
                back: false,
                nanoMachines: false
            },

            stats: {
                empathy: 0.2,
                strength: 0.7,
                will: 0.7
            },

            relationships: {
                withHumans: 0.3,
                withAndroid: 0.3
            }
        },
        love: {
            metAlmaz: false,
            trustsAlmaz: 0.5,

            isDamaged: false,
            upgrades: {
                eye: false,
                legs: false,
                arms: false,
                back: false,
                nanoMachines: false
            },
            
            stats: {
                empathy: 0.9,
                strength: 0.1,
                will: 0.6
            },

            relationships: {
                withHumans: 0.1,
                withAndroid: 0.5
            }
        }
    },
    secondary: {
        mother: {
            isAlive: true,
            
            metAlmaz: true,
            trustsAlmaz: 1,
            metLove: false,
            trustsLove: 0.5,
        },
        rbtech_002: {
            isAlive: true,

            metAlmaz: false,
            trustsAlmaz: 0.5,
            metLove: false,
            trustsLove: 0.5,
        },
        dex:{
            isAlive: true,
            
            metAlmaz: false,
            trustsAlmaz: 0.5,
            metLove: false,
            trustsLove: 0.5,
        }
    }
};