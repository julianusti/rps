import { play, playVsComputer, computerVsComputer } from '../../rps'

describe('RPS game engine suit', () => {
  describe('should play all possible combinations permutations', () => {
    describe('paper vs. scissors | rock | paper | unknown', () => {
      it('paper vs. scissors -> lose', () => {
        expect(play({ shape: 'paper' }, { shape: 'scissors' })).toEqual({
          playerOneSelectedShape: 'paper',
          playerTwoSelectedShape: 'scissors',
          result: {
            playerOneVsPlayerTwo: 'lose'
          }
        })
      })

      it('paper vs. rock -> win', () => {
        expect(play({ shape: 'paper' }, { shape: 'rock' })).toEqual({
          playerOneSelectedShape: 'paper',
          playerTwoSelectedShape: 'rock',
          result: {
            playerOneVsPlayerTwo: 'win'
          }
        })
      })

      it('paper vs. paper -> tie', () => {
        expect(play({ shape: 'paper' }, { shape: 'paper' })).toEqual({
          playerOneSelectedShape: 'paper',
          playerTwoSelectedShape: 'paper',
          result: {
            playerOneVsPlayerTwo: 'tie'
          }
        })
      })

      it('paper vs. unknown should throw TypeError', () => {
        expect(() => {
          play({ shape: 'paper' }, { shape: 'unknown' })
        }).toThrow()
      })
    })

    describe('scissors vs. paper | rock | scissors | unknown', () => {
      it('scissors vs. paper -> lose', () => {
        expect(play({ shape: 'scissors' }, { shape: 'paper' })).toEqual({
          playerOneSelectedShape: 'scissors',
          playerTwoSelectedShape: 'paper',
          result: {
            playerOneVsPlayerTwo: 'win'
          }
        })
      })

      it('scissors vs. rock -> win', () => {
        expect(play({ shape: 'scissors' }, { shape: 'rock' })).toEqual({
          playerOneSelectedShape: 'scissors',
          playerTwoSelectedShape: 'rock',
          result: {
            playerOneVsPlayerTwo: 'lose'
          }
        })
      })

      it('scissors vs. scissors -> tie', () => {
        expect(play({ shape: 'scissors' }, { shape: 'scissors' })).toEqual({
          playerOneSelectedShape: 'scissors',
          playerTwoSelectedShape: 'scissors',
          result: {
            playerOneVsPlayerTwo: 'tie'
          }
        })
      })

      it('scissors vs. unknown should throw TypeError', () => {
        expect(() => {
          play({ shape: 'scissors' }, { shape: 'unknown' })
        }).toThrow()
      })
    })

    describe('rock vs. paper | scissors | rock | unknown', () => {
      it('rock vs. scissors -> lose', () => {
        expect(play({ shape: 'rock' }, { shape: 'paper' })).toEqual({
          playerOneSelectedShape: 'rock',
          playerTwoSelectedShape: 'paper',
          result: {
            playerOneVsPlayerTwo: 'lose'
          }
        })
      })

      it('rock vs. scissors -> win', () => {
        expect(play({ shape: 'rock' }, { shape: 'scissors' })).toEqual({
          playerOneSelectedShape: 'rock',
          playerTwoSelectedShape: 'scissors',
          result: {
            playerOneVsPlayerTwo: 'win'
          }
        })
      })

      it('rock vs. rock -> tie', () => {
        expect(play({ shape: 'rock' }, { shape: 'rock' })).toEqual({
          playerOneSelectedShape: 'rock',
          playerTwoSelectedShape: 'rock',
          result: {
            playerOneVsPlayerTwo: 'tie'
          }
        })
      })

      it('rock vs. unknown should throw TypeError', () => {
        expect(() => {
          play({ shape: 'rock' }, { shape: 'unknown' })
        }).toThrow()
      })
    })
  })

  describe('should be possible to play with different players', () => {
    it('should play human vs. computer', () => {
      expect(playVsComputer({ shape: 'rock' })).toBeDefined()
    })

    it('should play computer vs. computer', () => {
      expect(computerVsComputer()).toBeDefined()
    })
  })
})
