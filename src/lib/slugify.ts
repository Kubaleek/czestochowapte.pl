export const slugify = (text: string) => {
    return text
      .toLowerCase() // Zamienia na małe litery
      .normalize("NFC") // Zachowuje diakrytykę, ale nie dzieli jej
      .replace(/ą/g, "a") // Zamienia 'ą' na 'a'
      .replace(/ć/g, "c") // Zamienia 'ć' na 'c'
      .replace(/ę/g, "e") // Zamienia 'ę' na 'e'
      .replace(/ł/g, "l") // Zamienia 'ł' na 'l'
      .replace(/ń/g, "n") // Zamienia 'ń' na 'n'
      .replace(/ó/g, "o") // Zamienia 'ó' na 'o'
      .replace(/ś/g, "s") // Zamienia 'ś' na 's'
      .replace(/ź/g, "z") // Zamienia 'ź' na 'z'
      .replace(/ż/g, "z") // Zamienia 'ż' na 'z'
      .replace(/[^a-z0-9\s-]/g, "") // Usuwa znaki specjalne poza spacjami i myślnikami
      .trim() // Usuwa białe znaki na początku i końcu
      .replace(/\s+/g, "-"); // Zamienia spacje na myślniki
  };