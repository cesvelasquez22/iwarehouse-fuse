import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FuseConfigService } from '@fuse/services/config.service';
import { IUser } from 'app/core/models/user.model';
// import { AuthService } from 'app/core/services/auth/auth.service';
// import { IzitoastAlertService } from 'app/core/utils/izitoast-alert.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loading: boolean;
    loginForm: FormGroup;

    constructor(
        private fuseConfigService: FuseConfigService,
        private formBuilder: FormBuilder,
        // private authService: AuthService,
        private router: Router,
        // private izitoastAlertService: IzitoastAlertService,
    ) {
        // Configure the layout
        this.fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true,
                },
                toolbar: {
                    hidden: true,
                },
                footer: {
                    hidden: true,
                },
                sidepanel: {
                    hidden: true,
                },
            },
        };

        this.buildForm();
    }

    private buildForm() {
        this.loginForm = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required]],
        });
    }

    ngOnInit(): void {}

    login() {
        this.router.navigate(['apps']);
        // this.loading = true;
        // const user: IUser = this.loginForm.value;
        // this.authService.loginWithEmailAndPassword(user.email, user.password).then(result => {
        //     this.loading = false;
        //     this.router.navigate(['apps']);
        // }).catch(err => {
        //     this.loading = false;
        //     this.izitoastAlertService.CustomErrorAlert('Correo y/o contraseña incorrectos');
        // });
    }
}
