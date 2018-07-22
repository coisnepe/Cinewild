-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 19 Juillet 2018 à 00:21
-- Version du serveur :  5.7.22-0ubuntu0.16.04.1
-- Version de PHP :  7.0.30-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `cinewild`
--

-- --------------------------------------------------------

--
-- Structure de la table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `duration` time NOT NULL,
  `releasedate` date NOT NULL,
  `actors` varchar(255) NOT NULL,
  `synopsis` text NOT NULL,
  `rating` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `director` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `movies`
--

INSERT INTO `movies` (`id`, `title`, `genre`, `duration`, `releasedate`, `actors`, `synopsis`, `rating`, `image`, `director`) VALUES
(1, 'Le Seigneur des Anneaux', 'Aventure ', '02:00:00', '2001-12-19', 'Elijah Wood, Sean Astin, Ian McKellen, Christopher Lee, Viggo Mortesen, Ian Holm, John Rhys-Davis, Hugo Weaving, Sean Bean', 'Dans ce chapitre de la trilogie, le jeune et timide Hobbit, Frodon Sacquet, hérite d\'un anneau. Bien loin d\'être une simple babiole, il s\'agit de l\'Anneau Unique, un instrument de pouvoir absolu qui permettrait à Sauron, le Seigneur des ténèbres, de régner sur la Terre du Milieu et de réduire en esclavage ses peuples. À moins que Frodon, aidé d\'une Compagnie constituée de Hobbits, d\'Hommes, d\'un Magicien, d\'un Nain, et d\'un Elfe, ne parvienne à emporter l\'Anneau à travers la Terre du Milieu jusqu\'à la Crevasse du Destin, lieu où il a été forgé, et à le détruire pour toujours. Un tel périple signifie s\'aventurer très loin en Mordor, les terres du Seigneur des ténèbres, où est rassemblée son armée d\'Orques maléfiques... La Compagnie doit non seulement combattre les forces extérieures du mal mais aussi les dissensions internes et l\'influence corruptrice qu\'exerce l\'Anneau lui-même.\r\nL\'issue de l\'histoire à venir est intimement liée au sort de la Compagnie.\r\n', 4, 'http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/00/02/16/27/69218096_af.jpg', 'Peter Jackson'),
(14, 'Ant-Man et la Guêpe', 'Super-Héros', '01:58:00', '2018-07-18', 'Paul Rud, Evangeline Lily, Michael Pena, Walton Goggins', 'Après les événements survenus dans Captain America : Civil War, Scott Lang a bien du mal à concilier sa vie de super-héros et ses responsabilités de père. Mais ses réflexions sur les conséquences de ses choix tournent court lorsque Hope van Dyne et le Dr Hank Pym lui confient une nouvelle mission urgente… Scott va devoir renfiler son costume et apprendre à se battre aux côtés de La Guêpe afin de faire la lumière sur des secrets enfouis de longue date…', 3, 'http://fr.web.img6.acsta.net/c_215_290/pictures/18/06/08/14/35/0842353.jpg', 'Peyton Reed'),
(15, 'Les Indestructibles 2', 'Animation', '01:58:00', '2018-07-04', 'Gérard Lanvin, Louane Emera, Déborah Pérret', 'Notre famille de super-héros préférée est de retour! Cette fois c’est Hélène qui se retrouve sur le devant de la scène laissant à Bob le soin de mener à bien les mille et une missions de la vie quotidienne et de s’occuper de Violette, Flèche et de bébé Jack-Jack. C’est un changement de rythme difficile pour la famille d’autant que personne ne mesure réellement l’étendue des incroyables pouvoirs du petit dernier… Lorsqu’un nouvel ennemi fait surface, la famille et Frozone vont devoir s’allier comme jamais pour déjouer son plan machiavélique.', 4, 'http://fr.web.img2.acsta.net/c_215_290/pictures/18/04/13/15/09/0323902.jpg', 'Brad Bird'),
(16, 'Fight Club', 'Thiller', '02:19:00', '1999-11-10', 'Edward Norton, Brad Pitt, Helena Bohnam Carter', 'Le narrateur, sans identité précise, vit seul, travaille seul, dort seul, mange seul ses plateaux-repas pour une personne comme beaucoup d\'autres personnes seules qui connaissent la misère humaine, morale et sexuelle. C\'est pourquoi il va devenir membre du Fight club, un lieu clandestin ou il va pouvoir retrouver sa virilité, l\'échange et la communication. Ce club est dirigé par Tyler Durden, une sorte d\'anarchiste entre gourou et philosophe qui prêche l\'amour de son prochain.', 5, 'http://fr.web.img6.acsta.net/c_215_290/pictures/17/04/27/09/53/033024.jpg', 'David Fincher'),
(17, 'Gone Girl', 'Thriller', '02:29:00', '2014-10-08', 'Ben Affleck, Rosamund Pike, Neil Patrick Harris', 'À l’occasion de son cinquième anniversaire de mariage, Nick Dunne signale la disparition de sa femme, Amy. Sous la pression de la police et l’affolement des médias, l’image du couple modèle commence à s’effriter. Très vite, les mensonges de Nick et son étrange comportement amènent tout le monde à se poser la même question : a-t-il tué sa femme ?', 4, 'http://fr.web.img6.acsta.net/c_215_290/pictures/14/09/11/17/05/508784.jpg', 'David Fincher'),
(18, 'Harry Potter à l\'Ecole des Sorciers', 'Fantastique', '02:32:00', '2001-12-05', 'Daniel Radcliff, Rupert Grint, Emma Watson', 'Harry Potter, un jeune orphelin, est élevé par son oncle Vernon et sa tante Pétunia qui le détestent. Alors qu\'il était haut comme trois pommes, ces derniers lui ont raconté que ses parents étaient morts dans un accident de voiture. Le jour de son onzième anniversaire, Harry reçoit la visite inattendue d\'un homme gigantesque se nommant Rubeus Hagrid. Celui-ci lui révèle qu\'il est en fait le fils de deux puissants magiciens et qu\'il possède lui aussi d\'extraordinaires pouvoirs. C\'est avec joie que le garçon accepte de suivre des cours à Poudlard, la célèbre école de sorcellerie. Il a enfin la chance de se faire des amis. Blâmé par le professeur Severus Rogue qui lui enseigne les potions et protégé par Albus Dumbledore, le directeur de l\'établissement, Harry va tenter d\'élucider le mystère de la pierre philosophale.', 4, 'http://fr.web.img3.acsta.net/c_215_290/pictures/18/07/02/17/25/3643090.jpg', 'Chris Columbus');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
