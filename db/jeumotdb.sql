-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Dim 04 Décembre 2016 à 23:11
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `jeumotdb`
--

-- --------------------------------------------------------

--
-- Structure de la table `performance`
--

CREATE TABLE `performance` (
  `ID` int(11) NOT NULL,
  `prenom` varchar(500) NOT NULL,
  `nom` varchar(500) NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `performance`
--

INSERT INTO `performance` (`ID`, `prenom`, `nom`, `score`) VALUES
(1, 'oumeyma', 'srat', 90),
(2, 'pierre', 'lemaire', 100),
(3, 'jean', 'matilde', 150),
(4, 'sylvie', 'lepen', 60),
(5, 'maria', 'sharapova', 50),
(6, 'mathieu', 'bridge', 60);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `performance`
--
ALTER TABLE `performance`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `performance`
--
ALTER TABLE `performance`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
