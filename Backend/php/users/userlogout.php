<?php
include '../conn.php';
session_name('users');
session_start();
session_destroy();
