import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImageSlider from './ImageSlider';

describe('ImageSlider', () => {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  it('renders the first image by default', () => {
    const { getByAltText } = render(<ImageSlider images={images} />);
    const firstImage = getByAltText('Slide 1');
    expect(firstImage).toBeInTheDocument();
  });

  it('allows clicking next to switch to the next image', () => {
    const { getByAltText, getByText } = render(<ImageSlider images={images} />);
    const nextButton = getByText('Next');
    fireEvent.click(nextButton);
    const secondImage = getByAltText('Slide 2');
    expect(secondImage).toBeInTheDocument();
  });

  it('allows clicking previous to switch to the previous image', () => {
    const { getByAltText, getByText } = render(<ImageSlider images={images} />);
    const prevButton = getByText('Previous');
    fireEvent.click(prevButton);
    const lastImage = getByAltText('Slide 3');
    expect(lastImage).toBeInTheDocument();
  });

  it('cycles back to the first image after reaching the last one', () => {
    const { getByAltText, getByText } = render(<ImageSlider images={images} />);
    const nextButton = getByText('Next');
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    const firstImage = getByAltText('Slide 1');
    expect(firstImage).toBeInTheDocument();
  });
});
