<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Auth as Login;

use Closure;

class Auth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Login::check()) {
            return $next($request);
        }
        return redirect('/login');
    }
}
