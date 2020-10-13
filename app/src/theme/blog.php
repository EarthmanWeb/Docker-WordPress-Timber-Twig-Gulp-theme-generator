<?php

/**
 * Template Name: Custom Blog Page
 * Description: A Page Template to display blog posts.
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$context = Timber::context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
$context['posts'] = Timber::get_posts('posts_per_page=10');
$templates        = array('blog.twig');
Timber::render($templates, $context);
