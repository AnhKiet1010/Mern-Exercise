import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Book from './Book';
import Index from './Index';

export default function Main() {
    return (
        <main>
            <Switch>
                <Route path='/' exact component={Index} />
                <Route path='book' exact component={Book} />
            </Switch>
        </main>
    );
}