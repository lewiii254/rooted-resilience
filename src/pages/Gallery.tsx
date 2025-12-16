import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, TreePine } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RainEffect from '@/components/RainEffect';
import FloatingLeaves from '@/components/FloatingLeaves';

import truphenaTreeHug from '@/assets/truphena-tree-hug.jpg';
import truphenaGuitar from '@/assets/truphena-guitar.jpg';
import truphenaStateHouse from '@/assets/truphena-state-house.jpg';
import truphenaBbc from '@/assets/truphena-bbc.jpg';

interface GalleryImage {
  src: string;
  title: string;
  description: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: truphenaTreeHug,
    title: 'The 72-Hour Embrace',
    description: 'Truphena during her record-breaking tree-hugging marathon at John Michuki Memorial Park, Nyeri.',
    category: 'Marathon',
  },
  {
    src: truphenaGuitar,
    title: 'Songs for the Earth',
    description: 'Finding peace and expression through music, surrounded by bamboo—a symbol of resilience.',
    category: 'Personal',
  },
  {
    src: truphenaStateHouse,
    title: 'Presidential Recognition',
    description: 'Walking down the State House steps after receiving the Head of State Commendation (HSC).',
    category: 'Recognition',
  },
  {
    src: truphenaBbc,
    title: 'Global Voice',
    description: 'Sharing her story with the world through BBC News, inspiring millions across continents.',
    category: 'Media',
  },
];

const categories = ['All', 'Marathon', 'Recognition', 'Media', 'Personal'];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage === null) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateImage('prev');
    if (e.key === 'ArrowRight') navigateImage('next');
  };

  return (
    <main 
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <RainEffect />
      <FloatingLeaves />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <span className="text-accent font-sans text-sm tracking-widest uppercase">Gallery</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mt-4">
            Moments of <span className="text-accent italic">Resilience</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto font-sans">
            A visual journey through Truphena's activism—from the forests of Nyeri to 
            the halls of world leaders.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-sans text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-accent-foreground'
                    : 'glass hover:bg-accent/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 pb-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-accent text-xs tracking-widest uppercase mb-2">
                    {image.category}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                    {image.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {image.description}
                  </p>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 right-4 glass rounded-full px-3 py-1">
                  <span className="text-xs text-foreground">{image.category}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <TreePine className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-lg flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-accent/20 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={24} className="text-foreground" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-accent/20 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="text-foreground" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-accent/20 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="text-foreground" />
          </button>

          {/* Image Container */}
          <div 
            className="max-w-5xl max-h-[85vh] mx-4 md:mx-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg mx-auto"
            />
            
            {/* Image Info */}
            <div className="text-center mt-6 px-4">
              <span className="text-accent text-xs tracking-widest uppercase">
                {filteredImages[selectedImage].category}
              </span>
              <h3 className="font-serif text-2xl font-semibold text-foreground mt-2">
                {filteredImages[selectedImage].title}
              </h3>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                {filteredImages[selectedImage].description}
              </p>
              <p className="text-muted-foreground/60 text-sm mt-4">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default Gallery;
