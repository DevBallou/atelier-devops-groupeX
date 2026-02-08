// files.ts
// Exemple simple pour le TP Git / DevOps

type Image = {
  id: number;
  title: string;
  url: string;
};

let images: Image[] = [];

/**
 * Ajoute une image à la liste
 */
export function ajouterImage(title: string, url: string): Image {
  const nouvelleImage: Image = {
    id: images.length + 1,
    title: title,
    url: url,
  };

  images.push(nouvelleImage);
  return nouvelleImage;
}

/**
 * Retourne toutes les images
 */
export function listerImages(): Image[] {
  return images;
}

/**
 * Supprime une image par son id
 */
export function supprimerImage(id: number): boolean {
  const index = images.findIndex(image => image.id === id);
  if (index !== -1) {
    images.splice(index, 1);
    return true;
  }
  return false;
}