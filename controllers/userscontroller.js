import express from 'express';
import {v4 as uuidv4} from 'uuid';

import pool from '../database/index.js';

export const getAllUsers = async(req, res) => {
    try {
        const [rows, fields] = await pool.query("SELECT * FROM user")
        res.send({
            data: rows
        });
    } catch (error) {
    console.log(error);
    }
}

export const getUserById = async(req, res) => {
    try {
        const {id} = req.params
        const [rows, fields] = await pool.query("SELECT * FROM user where idUser = ?", [id]);
        res.send({
            data: rows
        });
    } catch (error) {
        console.log(error);
    }
}

export const createUser = async(req, res) => {
    try {
        const idUser = uuidv4();
        const {firstName, lastName, age} = req.body;
        const sql = "INSERT INTO user (idUser, firstName, lastName, age) values (?, ?, ?, ?)";
        const [rows, fields] = await pool.query(sql, [idUser, firstName, lastName, age]);
        res.send({
            data: rows
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "error"
        });
    }
}

export const updateUser = async(req, res) => {
    try {
        const {id} = req.params
        const {firstName, lastName, age} = req.body;
        const sql = "UPDATE user SET firstName = ?, lastName = ?, age = ?  where idUser = ?";
        const [rows, fields] = await pool.query(sql, [firstName, lastName, age, id]);
        res.send({
            data: rows
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "error"
        });
    }
}

export const deleteUser = async(req, res) => {
    try {
        const { id } = req.params
        const [rows, fields] = await pool.query("delete from user where idUser = ?", [id]);
        res.send({
            data: rows
        });
    } catch (error) {
        console.log(error);
    }
}

