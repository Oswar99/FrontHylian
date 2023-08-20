import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IUser } from 'src/helpers/types';
import { deleteShare, getShares, shareWithUser } from 'src/services/api.service';

@Component({
    selector: 'share-modal',
    templateUrl: './share-modal.html',
    styleUrls: ['../styles.components.scss']
})

export class ShareModal implements OnInit {
    @Input() project_id: string = '';
    @Input() carpet: boolean = false;

    users: IUser[] = [];

    loadShare() {
        getShares(this.project_id).then(v => {
            if (v.data.successed) {
                this.users = v.data.list;
            }
        })
    }

    ngOnInit(): void {
        this.loadShare();
    }

    shareWith(id: string, carpet: boolean) {
        if (this.project_id) {
            shareWithUser({
                project: this.project_id,
                id: id,
                carpet: carpet
            }).then(v => {
                alert(v.data.message);
                this.loadShare();
            })
        }
    }

    btnDeleteShare(id: string) {
        deleteShare(this.project_id, id).then(v => {
            if (v.data.successed) {
                this.loadShare();
            }
        })
    }
}