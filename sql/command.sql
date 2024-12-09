--Creating table posts
CREATE TABLE `posts`(
    `id` INT,
    `title` VARCHAR(50),
    `content` VARCHAR(100),
    `created_at` VARCHAR(20),
    `img_URL` VARCHAR(200)
);

--Creating table users
CREATE TABLE `users`(
    `id` INT,
    `username` VARCHAR(20),
    `password` VARCHAR(50)
);

--Inserting data into posts table using query on phpMyAdmin
INSERT INTO
    `posts`(
        `id`,
        `title`,
        `content`,
        `created_at`,
        `img_URL`
    )
VALUES
    (
        1,
        'The Art of Minimalism',
        'Discover the benefits of minimalism and how it can transform your life by helping you focus on what truly matters.',
        '2024-12-01',
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0'
    ),
    (
        2,
        'Top 10 Travel Destinations for 2024',
        'Explore the most breathtaking travel spots for your next vacation. From tropical beaches to mountain getaways.',
        '2024-11-25',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
    ),
    (
        3,
        'Healthy Eating on a Budget',
        'Learn how to eat nutritious meals without breaking the bank. Includes tips and easy recipes.',
        '2024-11-20',
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'
    ),
    (
        4,
        'Mastering React in 2024',
        'A comprehensive guide to becoming proficient in React.js with tips, tricks, and resources.',
        '2024-11-15',
        'https://images.unsplash.com/photo-1581091012184-e6485e41f0a4'
    ),
    (
        5,
        'DIY Home Decor Ideas',
        'Upgrade your home with these creative and affordable DIY decor projects that you can do this weekend.',
        '2024-11-10',
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4'
    ),
    (
        6,
        'The Science of Better Sleep',
        'Understand the science behind sleep and learn actionable tips to improve your nightly rest.',
        '2024-11-05',
        'https://images.unsplash.com/photo-1526401281623-75b6d372f6bc'
    ),
    (
        7,
        'A Beginner’s Guide to Cryptocurrency',
        'An easy-to-understand guide about what cryptocurrency is and how to start investing safely.',
        '2024-11-01',
        'https://images.unsplash.com/photo-1542223616-466a975662c8'
    ),
    (
        8,
        'Yoga for Mental Wellness',
        'Explore how yoga can help reduce stress and boost mental clarity with simple daily practices.',
        '2024-10-28',
        'https://images.unsplash.com/photo-1514989940723-e8e51635b782'
    );