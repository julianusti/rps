import { play, playVsComputer, computerVsComputer } from '../../rps';

describe('RPS game engine suit', () => {
  describe('should play all possible combinations permutations', () => {
    describe('paper vs. scissors | rock | paper | unknown', () => {
      it('paper vs. scissors -> lose', () => {
        expect(play({shape: 'paper'}, {shape: 'scissors'})).toBe('lose');
      });

      it('paper vs. rock -> win', () => {
        expect(play({shape: 'paper'}, {shape: 'rock'})).toBe('win');
      });

      it('paper vs. paper -> tie', () => {
        expect(play({shape: 'paper'}, {shape: 'paper'})).toBe('tie');
      });

      it('paper vs. unknown should throw TypeError', () => {
        expect(() => {
          play({shape: 'paper'}, {shape: 'unknown'})
        }).toThrow();
      });
    });

    describe('scissors vs. paper | rock | scissors | unknown', () => {
      it('scissors vs. paper -> lose', () => {
        expect(play({shape: 'scissors'}, {shape: 'paper'})).toBe('win');
      });

      it('scissors vs. rock -> win', () => {
        expect(play({shape: 'scissors'}, {shape: 'rock'})).toBe('lose');
      });

      it('scissors vs. scissors -> tie', () => {
        expect(play({shape: 'scissors'}, {shape: 'scissors'})).toBe('tie');
      });

      it('scissors vs. unknown should throw TypeError', () => {
        expect(() => {
          play({shape: 'scissors'}, {shape: 'unknown'})
        }).toThrow();
      });
    });

    describe('rock vs. paper | scissors | rock | unknown', () => {
      it('rock vs. scissors -> lose', () => {
        expect(play({shape: 'rock'}, {shape: 'paper'})).toBe('lose');
      });

      it('rock vs. scissors -> win', () => {
        expect(play({shape: 'rock'}, {shape: 'scissors'})).toBe('win');
      });

      it('rock vs. rock -> tie', () => {
        expect(play({shape: 'rock'}, {shape: 'rock'})).toBe('tie');
      });

      it('rock vs. unknown should throw TypeError', () => {
        expect(() => {
          play({shape: 'rock'}, {shape: 'unknown'})
        }).toThrow();
      });
    });
  });

  describe('should be possible to play with different players', () => {
    it('should play human vs. computer', () => {
      expect(playVsComputer({shape: 'rock'})).toBeDefined();
    });

    it('should play computer vs. computer', () => {
      expect(computerVsComputer()).toBeDefined();
    });
  })
});
