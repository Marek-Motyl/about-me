import MockDate from 'mockdate';
import { render, screen } from '@testing-library/react'
import ExperienceTimer from './ExperienceTimer';

describe('ExperienceTimer', () => {
    it('should displays correct value', () => {
        MockDate.set('2024-02-01');

        render(<ExperienceTimer />)


        expect(screen.getByTestId('experience-timer')).toHaveTextContent('8 years, 0 months, and 1 days')
    });
})